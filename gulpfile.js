const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');
const fs=require('fs');


gulp.task('sassTask', function () {
    return src('src/sass/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('dist', { sourcemaps: '.' }));
});


gulp.task('sassTask1', function () {
    return src('src/sass/style1.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('dist', { sourcemaps: '.' }));
});

gulp.task('sassTask2', function () {
    return src('src/sass/style2.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('dist', { sourcemaps: '.' }));
});


gulp.task('fileinclude', function () {
    gulp.src(['src/layouts/layoutEcomMB1/test.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('src/test/html'));
});



const cssContent = fs.readFileSync("src/layouts/layoutEcomMB1/style.css", "utf8");
const htmlContent = fs.readFileSync("src/layouts/layoutEcomMB1/content.html", "utf8");


gulp.task('taskJS',function(){
	return gulp.src(['src/js/renderBox.js'])
   	.pipe(replace('%%css%%', cssContent))
    .pipe(replace('%%html%%', htmlContent))
    .pipe(gulp.dest('src/test/js/'));
});



