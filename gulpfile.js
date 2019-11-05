var sass = require('gulp-sass')
var gulp = require('gulp');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function css_style(done){
    gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true,
        outputStyle:'compressed'
    }))
    .on('error' , console.error.bind(console))
    //.pipe(autoprefixer({
    //    browsers:['last 2 versions'],
    //    cascade: false
    //}))
    .pipe(rename({suffix:'.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream());

    done();
};

function sync(done){
    browserSync.init({
        server:{
            baseDir: "./",
        },
        port: 3000
    })

    done();
}

function browserReload(done){
    browserSync.reload();
    
    done();
}


function watchSass (){
    gulp.watch("./scss/**/*",css_style)
}
function watchFiles (){
    gulp.watch("./**/*.html",browserReload);
    gulp.watch("./**/*.js",browserReload)
}


gulp.task('default',gulp.parallel(sync,watchSass,watchFiles));


