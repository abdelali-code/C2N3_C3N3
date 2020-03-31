const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

sass.compiler = require("node-sass");
function compile_sass() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/styles"));
}

function watchSass() {
  return gulp.watch("src/sass/**/*.scss", compile_sass);
}

// serve the app
function serve() {
  return browserSync.init({
    server: "src",
    open: true,
    port: 3003
  });
}

gulp.task("startServer", gulp.series(serve));
gulp.task("compile:sass", compile_sass);
gulp.task("watch:sass", watchSass);

// function copy() {
//   return gulp
//     .src(["src/*.html", "src/**/*.svg", "src/**/*.css", "src/**/*.js"])
//     .pipe(gulp.dest("build"));
// }

//for production
// sass.compiler = require('node-sass');
// gulp.task('sass', function () {
//   return gulp.src('src/sass/*.scss')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('build/styles'));
// });

// gulp.task("copy", copy);

// process new syntax of javascript to compatible syntax

function processJs() {
  return gulp
    .src("src/scripts/**/*.js")
    .pipe(babel({ presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("build/scripts"));
}

// function watchJs() {
//   gulp.watch("src/scripts/*.js", processJs);
// }

gulp.task("process:js", processJs);
// gulp.task("watch:js", watchJs);
