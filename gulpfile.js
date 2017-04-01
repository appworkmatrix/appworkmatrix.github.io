var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump = require('pump');

var paths = {
    src: 'resources/',
    dest: 'assets/'
};

var resources = {
    sass: 'scss/**/*.scss',
    scripts: 'scripts/**/*.js',
    css: 'css',
    js: 'scripts'
};

gulp.task('default', ['watch']);

gulp.task('sass', function(){
    return gulp.src(paths.src+resources.sass)
        .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest+resources.css));
});

gulp.task('compress', function(cb){
    pump([
            gulp.src(paths.src+resources.scripts),
            sourcemaps.init(),
            uglify(),
            sourcemaps.write(),
            gulp.dest(paths.dest+resources.js)
        ],
        cb
    );
});

gulp.task('watch', ['sass', 'compress'], function(){
    gulp.watch(paths.src+resources.sass, ['sass']);
    gulp.watch(paths.src+resources.scripts, ['compress']);
});