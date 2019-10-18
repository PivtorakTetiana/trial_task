const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const cssFiles = [
    'src/sass/fonts.scss',
    'src/sass/main.scss'
];

/*Styles compile*/
gulp.task('styles', function () {
    return gulp.src(cssFiles)
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

/*Watchers*/
gulp.task('watch', function () {
    gulp.watch('src/sass/**/*.scss', gulp.series('styles'));
});

