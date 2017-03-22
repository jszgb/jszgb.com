import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import sassNpm from 'sass-npm'

gulp.task('style', () => {
  return gulp.src('styles/style.scss')
  .pipe(gulpSass({
    paths: ['styles/style.scss'],
    importer: sassNpm.importer
  }))
})

gulp.task('default', ['style'], () => {
});