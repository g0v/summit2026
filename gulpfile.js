const gulp = require('gulp')
const pug = require('gulp-pug')
const postcss = require('gulp-postcss')
const data = require('gulp-data')
const connect = require('gulp-connect')
const sitemap = require('gulp-sitemap')
const path = require('path')
const rename = require('gulp-rename')
const yaml = require('gulp-yaml');

function parseDatetime(dateString) {
  if (!dateString) return 0;
  let parts = dateString.split(/[-T:+]/);
  let isoString = `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}T${parts[3]}:${parts[4]}:${parts[5]}+${parts[6]}:${parts[7]}`;
  let dateObject = new Date(isoString);
  return dateObject;
}

function buildAssets(baseurl = '/2024/') {
  gulp
    .src('src/locale/*.yml')
    .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/i18n/')))
  return gulp
    .src('src/assets/**')
    .pipe(gulp.dest('.' + path.join('/static/', baseurl, '/assets/')))
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
  for (let room of schedule['rooms']) {
    schedule['sessions_by_room'][room['id']] = []
  }
  for (let session of schedule['sessions']) {
    if (!session['room'] || !session['start'] || !session['end']) continue;
    session['size'] = (parseDatetime(session['end']) - parseDatetime(session['start']))/60000;
    session['offset'] = (parseDatetime(session['start']) - parseDatetime('2024-5-4T09:20:00+08:00'))/60000;
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
  await buildPug('/summit2024/')
  await buildPcss('/summit2024/')
  await buildAssets('/summit2024/')
})

gulp.task('deploy', async () => {
  await buildPug('/2024/')
  await buildPcss('/2024/')
  await buildAssets('/2024/')
})

gulp.task('server', function () {
  connect.server({
    port: 3000,
    livereload: true,
    host: '::',
    root: 'static'
  })
  buildPug()
  buildPcss()
  buildAssets()

  gulp.watch(['src/**/*.pug', 'src/**/*.pcss', 'src/**/*.yml'], function (cb) {
    buildPug()
    buildPcss()
    buildAssets()
    cb()
  })
})
