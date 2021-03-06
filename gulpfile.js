

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task("jsErrorHint", function() {
    console.log("WorksFine");
    return gulp.src("js/*.js")
            .pipe(jshint())
            .pipe(jshint.reporter("default"));
});

gulp.task("sass", function() {
    console.log("I'm working fine boss ;)");
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

gulp.task('watch', function() {
    gulp.watch('scss/*scss', gulp.series('sass'));
    gulp.watch('js/*.js', gulp.series('jsErrorHint'));
});


 