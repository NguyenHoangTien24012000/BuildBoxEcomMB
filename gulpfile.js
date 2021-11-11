const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const replace = require('gulp-replace');
const fs=require('fs');
const replaceBatch = require('gulp-batch-replace');



//task SASS
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

gulp.task('sassTask3', function () {
    return src('src/sass/style3.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(dest('dist', { sourcemaps: '.' }));
});





//task replace content1
gulp.task('fileinclude', function () {
    gulp.src(['src/layouts/layoutEcomMB1/test.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('src/test/html'));
});

gulp.task('fileinclude1', function () {
    gulp.src(['src/layouts/layoutEcomMB2/test2.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('src/test/html'));
});

gulp.task('fileinclude2', function () {
    gulp.src(['src/layouts/layoutEcomMB3/test3.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('src/test/html'));
});

gulp.task('fileinclude3', function () {
    gulp.src(['src/layouts/layoutEcomMB4/test4.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('src/test/html'));
});





//replace content2
const cssContent = fs.readFileSync("src/layouts/layoutEcomMB1/style.css", "utf8");
const htmlContent = fs.readFileSync("src/layouts/layoutEcomMB1/content.html", "utf8");

gulp.task('taskJS',function(){
	return gulp.src(['src/js/renderBox.js'])
   	.pipe(replace('%%css%%', cssContent))
    .pipe(replace('%%html%%', htmlContent))
    .pipe(gulp.dest('src/test/js/'));
});

const cssContent2 = fs.readFileSync("src/layouts/layoutEcomMB2/style.css", "utf8");
const htmlContent2 = fs.readFileSync("src/layouts/layoutEcomMB2/content.html", "utf8");

gulp.task('taskJS1',function(){
	return gulp.src(['src/js/renderBox1.js'])
   	.pipe(replace('%%css%%', cssContent2))
    .pipe(replace('%%html%%', htmlContent2))
    .pipe(gulp.dest('src/test/js/'));
});


const cssContent3 = fs.readFileSync("src/layouts/layoutEcomMB3/style.css", "utf8");
const htmlContent3 = fs.readFileSync("src/layouts/layoutEcomMB3/content.html", "utf8");

gulp.task('taskJS2',function(){
	return gulp.src(['src/js/renderBox2.js'])
   	.pipe(replace('%%css%%', cssContent3))
    .pipe(replace('%%html%%', htmlContent3))
    .pipe(gulp.dest('src/test/js/'));
});



const cssContent4 = fs.readFileSync("src/layouts/layoutEcomMB4/style.css", "utf8");
const htmlContent4 = fs.readFileSync("src/layouts/layoutEcomMB4/content.html", "utf8");

gulp.task('taskJS3',function(){
	return gulp.src(['src/js/renderBox3.js'])
   	.pipe(replace('%%css%%', cssContent4))
    .pipe(replace('%%html%%', htmlContent4))
    .pipe(gulp.dest('src/test/js/'));
});


//replace data

gulp.task('replaceData1', function() {   
    //array is dynamic
    var strData =  (fs.readFileSync("src/data/data2.json", "utf8"));
   // console.log(data);
    eval('var data='+strData);
    // var replaceThis = [];
    // console.log(data)y
    
    var arrdata=[];
    var data=data[0];
    for(let i in data){arrdata.push(['%'+i+'%',data[i]])}

        gulp.src(['src/test/js/renderBox1.js'])
            .pipe(replaceBatch(arrdata))
			.pipe(gulp.dest('./src/test/jsRenderBoxData'));
});



gulp.task('replaceData2', function() {   
    //array is dynamic
    var strData =  (fs.readFileSync("src/data/data3.json", "utf8"));
   // console.log(data);
    eval('var data='+strData);
    // var replaceThis = [];
    // console.log(data)y
    
    var arrdata=[];
    var data=data[0];
    for(let i in data){arrdata.push(['%'+i+'%',data[i]])}

        gulp.src(['src/test/js/renderBox2.js'])
            .pipe(replaceBatch(arrdata))
			.pipe(gulp.dest('./src/test/jsRenderBoxData'));
});


gulp.task('replaceData3', function() {   
    //array is dynamic
    var strData =  (fs.readFileSync("src/data/data4.json", "utf8"));
   // console.log(data);
    eval('var data='+strData);
    // var replaceThis = [];
    // console.log(data)y
    
    var arrdata=[];
    var data=data[0];
    for(let i in data){arrdata.push(['%'+i+'%',data[i]])}

        gulp.src(['src/test/js/renderBox3.js'])
            .pipe(replaceBatch(arrdata))
			.pipe(gulp.dest('./src/test/jsRenderBoxData'));
});