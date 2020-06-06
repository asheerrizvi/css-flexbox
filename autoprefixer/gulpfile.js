const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function styles() {
  gulp.src('css/styles.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('build'))
}

gulp.task('watch', () => {
  gulp.watch('css/styles.css', styles);
});