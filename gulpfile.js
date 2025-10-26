const gulp = require('gulp')
const pug = require('gulp-pug')
const postcss = require('gulp-postcss')
const data = require('gulp-data')
const connect = require('gulp-connect')
const sitemap = require('gulp-sitemap')
const path = require('path')
const rename = require('gulp-rename')
const yaml = require('js-yaml')
const fs = require('fs-extra')
const { Transform } = require('node:stream')

function parseDatetime(dateString) {
  if (!dateString) return 0;
  let parts = dateString.split(/[-T:+]/);
  let isoString = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}T${parts[3]}:${parts[4]}:${parts[5]}+${parts[6]}:${parts[7]}`;
  let dateObject = new Date(isoString);
  return dateObject;
}

function formatDatetime(dateObject) {
  let hours = String(dateObject.getUTCHours() + 8).padStart(2, '0');
  let minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function buildI18n(baseurl = '/2026/') {
  let locales = { en: {} }

  // Load schedule
  const schedule = require('./src/data/schedule.json')
  for (let session of schedule.sessions) {
    if (!session.room || !session.start || !session.end) continue;
    locales.en[`session.${session.id}.title`] = session.en.title
    locales.en[`session.${session.id}.description`] = session.en.description
  }

  for (let speaker of schedule.speakers) {
    locales.en[`speakers.${speaker.id}.name`] = speaker.en.name
    locales.en[`speakers.${speaker.id}.bio`] = speaker.en.bio
  }

  for (let sessionType of schedule.session_types) {
    locales.en[`session_type.${sessionType.id}`] = sessionType.en.name
  }

  for (let room of schedule.rooms) {
    locales.en[`room.${room.id}`] = room.en.name
  }

  for (let tag of schedule.tags) {
    locales.en[`tag.${tag.id}`] = tag.en.name
  }

  // Merge translations into base YAML file
  return gulp
    .src('src/locale/*.yml')
    .pipe(new Transform({
      readableObjectMode: true,
      writableObjectMode: true,
      transform: function (file, _, callback) {
        const lang = file.stem

        // Load and merge each locale
        let document = yaml.load(file.contents.toString('utf8'), { schema: yaml.FAILSAFE_SCHEMA })
        Object.assign(document, locales[lang])

        // Rewrite file extension and content
        file.contents = Buffer.from(JSON.stringify(document, null, 2))
        file.extname = '.json'
        this.push(file)
        callback()
      }
    }))
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/i18n/')))
}

function buildAssets(baseurl = '/2026/') {
  gulp
    .src('src/assets/**')
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/')))
  return gulp
    .src('src/data/**')
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/data/')))
}

function buildPcss(baseurl = '/2026/') {
  let dest_path = '.' + path.join('/static/', baseurl, '/assets/css')
  return gulp
    .src('src/pcss/*.pcss')
    .pipe(
      data(file => {
        console.log('[build] ' + file['history'])
      })
    )
    .pipe(postcss())
    .pipe(
      rename({
        extname: '.css'
      })
    )
    .pipe(gulp.dest(dest_path))
}

function buildSchedule() {
  let schedule = require('./src/data/schedule.json')

  // Initial setup
  schedule.sessions = schedule.sessions.sort((a, b) => parseDatetime(a.start) - parseDatetime(b.start))
  schedule.sessions_by_t = {}
  schedule.sessions_timemap = {}

  let tags = new Set()
  let speakers = new Set()

  for (let session of schedule.sessions) {
    if (!session.room || !session.start || !session.end) continue
    session.start_t = (parseDatetime(session.start) - parseDatetime('2026-5-4T09:00:00+08:00')) / 60000
    session.end_t = (parseDatetime(session.end) - parseDatetime('2026-5-4T09:00:00+08:00')) / 60000
    schedule.sessions_timemap[session.start_t] = formatDatetime(parseDatetime(session.start))
    schedule.sessions_timemap[session.end_t] = formatDatetime(parseDatetime(session.end))
    if (!schedule.sessions_by_t[session.start_t])
      schedule.sessions_by_t[session.start_t] = {
        't': formatDatetime(parseDatetime(session.start)),
        'rooms': [],
        'sessions': []
      }

    schedule.sessions_by_t[session.start_t].sessions.push(session)
    schedule.sessions_by_t[session.start_t].rooms.push(session.room)
    if (session.broadcast)
      schedule.sessions_by_t[session.start_t].rooms = schedule.sessions_by_t[session.start_t].rooms.concat(session.broadcast)
    schedule.sessions_by_t[session.start_t].rooms = [...new Set(schedule.sessions_by_t[session.start_t].rooms)]
    tags = new Set([...tags, ...session.tags])
    speakers = new Set([...speakers, ...session.speakers])
  }

  let entries = Object.entries(schedule.sessions_by_t)
  entries.sort((a, b) => a[0] - b[0])

  schedule.sessions_by_t = Object.fromEntries(entries)
  schedule.tags = schedule.tags.filter(tag => tags.has(tag.id))
  schedule.speakers = schedule.speakers.filter(speaker => speakers.has(speaker.id))

  return schedule
}

function buildPug(baseurl = '/2026/') {
  let build_time = new Date().getTime()
  let dest_path = '.' + path.join('/static/', baseurl)

  // Load schedule
  let schedule = buildSchedule()

  return gulp
    .src('src/pug/**/index.pug')
    .pipe(
      data(file => {
        console.log('[build] ' + file.history)

        // Set up basic context
        let context = {
          schedule: schedule,
          timestamp: build_time,
          base: baseurl
        }

        // See if additional data is available
        const pagename = path.basename(file.dirname)
        if (fs.existsSync(`./src/data/${pagename}.json`))
          context[pagename] = require(`./src/data/${pagename}.json`)

        return context
      })
    )
    .pipe(pug())
    .pipe(gulp.dest(dest_path))
    .pipe(
      sitemap({
        siteUrl: 'https://summit.g0v.tw',
        images: true
      })
    )
    .pipe(gulp.dest(dest_path))
    .pipe(connect.reload())
}

gulp.task('build', async () => {
  await buildPcss('/summit2026/')
  await buildI18n('/summit2026/')
  await buildAssets('/summit2026/')
  await buildPug('/summit2026/')
})

gulp.task('deploy', async () => {
  await buildPcss('/2026/')
  await buildI18n('/2026/')
  await buildAssets('/2026/')
  await buildPug('/2026/')
})

gulp.task('server', async () => {
  connect.server({
    port: 3000,
    livereload: true,
    host: '::',
    root: 'static'
  })
  await buildPcss()
  await buildI18n()
  await buildAssets()
  await buildPug()

  gulp.watch(['src/**/*.pug', 'src/**/*.pcss', 'src/**/*.yml', , 'src/**/*.json'], async () => {
    await buildPcss()
    await buildI18n()
    await buildAssets()
    await buildPug()
  })
})
