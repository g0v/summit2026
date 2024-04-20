const gulp = require('gulp')
const pug = require('gulp-pug')
const postcss = require('gulp-postcss')
const data = require('gulp-data')
const connect = require('gulp-connect')
const sitemap = require('gulp-sitemap')
const path = require('path')
const rename = require('gulp-rename')
const yaml = require('gulp-yaml')
const fs = require('fs-extra')

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

function buildAssets(baseurl = '/2024/') {
  let enjson = {}
  let schedule = require('./src/data/schedule.json')
  for (let session of schedule.sessions) {
    if (!session.room || !session.start || !session.end) continue;
    enjson[`session.${session.id}.title`] = session.en.title
    enjson[`session.${session.id}.description`] = session.en.description
  }
  for (let speaker of schedule.speakers) {
    enjson[`speakers.${speaker.id}`] = speaker.en.name
  }
  let data = require('./src/data/index.json')
  for (let level of data.partners) {
    console.log(level)
    enjson[`partners.${level.id}`] = level.name.en
    for (let sponsor of level.sponsors) {
      enjson[`partners.${sponsor.id}`] = sponsor.name.en
      if (sponsor.summary.en || sponsor.summary.zh) {
        enjson[`partners.${sponsor.id}.summary`] = '<p>' + (sponsor.summary.en || sponsor.summary.zh).split('\n').join('</p><p>') + '</p>'
      }
    }
  }
  fs.mkdirSync('.' + path.join('/static/', baseurl, '/assets/i18n/'), { recursive: true })
  fs.writeJson('.' + path.join('/static/', baseurl, '/assets/i18n/') + 'additional.en.json', enjson, { spaces: 2 })

  gulp
    .src('src/locale/*.yml')
    .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/i18n/')))

  gulp
    .src('src/assets/**')
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/')))
  return gulp
    .src('src/data/**')
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/data/')))
}

function buildPcss(baseurl = '/2024/') {
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

function buildPug(baseurl = '/2024/') {
  let build_time = new Date().getTime()
  let dest_path = '.' + path.join('/static/', baseurl)
  let schedule = require('./src/data/schedule.json')
  schedule['sessions'] = schedule['sessions'].sort((a, b) => parseDatetime(a['start']) - parseDatetime(b['start']));
  schedule['sessions_by_room'] = {}
  schedule['sessions_timemap'] = {}
  for (let room of schedule['rooms']) {
    schedule['sessions_by_room'][room['id']] = []
  }
  for (let session of schedule['sessions']) {
    if (!session['room'] || !session['start'] || !session['end']) continue;
    session['start_t'] = (parseDatetime(session['start']) - parseDatetime('2024-5-4T09:00:00+08:00')) / 60000;
    session['end_t'] = (parseDatetime(session['end']) - parseDatetime('2024-5-4T09:00:00+08:00')) / 60000;
    schedule['sessions_timemap'][session['start_t']] = formatDatetime(parseDatetime(session['start']));
    schedule['sessions_timemap'][session['end_t']] = formatDatetime(parseDatetime(session['end']));
    schedule['sessions_by_room'][session['room']].push(session);
  }

  return gulp
    .src('src/pug/**/index.pug')
    .pipe(
      data(file => {
        console.log('[build] ' + file['history'])
        const result = {
          data: require('./src/data/index.json'),
          schedule: schedule,
          timestamp: build_time,
          base: baseurl
        }
        return result
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
  await buildPcss('/summit2024/')
  await buildAssets('/summit2024/')
  await buildPug('/summit2024/')
})

gulp.task('deploy', async () => {
  await buildPcss('/2024/')
  await buildAssets('/2024/')
  await buildPug('/2024/')
})

gulp.task('server', async () => {
  connect.server({
    port: 3000,
    livereload: true,
    host: '::',
    root: 'static'
  })
  await buildPcss()
  await buildAssets()
  await buildPug()

  gulp.watch(['src/**/*.pug', 'src/**/*.pcss', 'src/**/*.yml'], async () => {
    await buildPcss()
    await buildAssets()
    await buildPug()
  })
})
