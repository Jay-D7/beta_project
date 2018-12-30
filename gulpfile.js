

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var bootstrap = require('bootstrap');

gulp.task("jsErrorHint", function() {
    console.log("WorksFine");
    return gulp.src("js/*.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
});

gulp.task("sass", function() {
    console.log("Działam i mam się dobrze ;)");
    return gulp.src("scss/*.scss")
           .pipe(sourcemaps.init())
           .pipe(sass({
               errLogToConsole: true,
               outputStyle: "expanded",
               sourceComments: "map"
    }))
           .pipe(sourcemaps.write())
           .pipe(gulp.dest("css"));
});

gulp.task("watch", function() {
    gulp.watch("scss/*scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("jsErrorHint"));
});