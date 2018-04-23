var gulp   = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', ['js'], function () {
    gulp.watch('src/*.js', ['js']);
});

gulp.task('build', ['js'], function () {

});

gulp.task('js', function () {
    gulp.src('src/jquery.slidetext.js')
        .pipe(gulp.dest('dist'));

    gulp.src('src/jquery.slidetext.js')
        .pipe(uglify())
        .pipe(rename('jquery.slidetext.min.js'))
        .pipe(gulp.dest('dist'));
});