var gulp             = require('gulp'),
    compass          = require('gulp-compass'),
    sourcemaps       = require('gulp-sourcemaps'),
    cssnano          = require('gulp-cssnano'),
    uglify           = require('gulp-uglify'),
    rename           = require('gulp-rename'),
    concat           = require('gulp-concat'),
    path             = require('path');

    gulp.task('styles', function(){
    return gulp.src(['static_src/sass/**/*.scss'])
        .pipe(compass({
            project: path.join(__dirname, './'),
            css: 'static/css',
            image: 'static/images',
            sass: 'static_src/sass',
            style: 'compressed',
            sourcemap: true
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('static/css'));
});

gulp.task('scripts', function(){
    gulp.src(['static_src/js/lib/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
    return gulp.src('static_src/js/site/**/*.js')
        .pipe(concat('site.js'))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('static/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('static/js'));
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('default', ['styles', 'scripts'], function(){
    gulp.watch('static_src/sass/**/*.scss', ['styles']);
    gulp.watch('static_src/js/**/*.js', ['scripts']);
});
