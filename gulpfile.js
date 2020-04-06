const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const compiler = require("webpack");
// const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");

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
// function serve() {
//   return browserSync.init({
//     server: "src",
//     open: true,
//     port: 3003
//   });
// }

// gulp.task("startServer", gulp.series(serve));
gulp.task("compile:sass", compile_sass);
gulp.task("watch:sass", watchSass);

// function processJs() {
//   return (
//     gulp
//       .src("src/scripts/**/*.js")
//       .pipe(babel({ presets: ["@babel/env"] }))

//       // .pipe(rename({ suffix: ".min" }))
//       .pipe(gulp.dest("src/dev"))
//   );
// }

function bundle() {
  return gulp
    .src("src/scripts/main.js")
    .pipe(webpack(require("./webpack.config"), compiler))
    .pipe(gulp.dest("src/dev"));
}

// function watchJs() {
//   gulp.watch("src/scripts/*.js", processJs);
// }
function watchjs() {
  // return gulp.watch("src/scripts/**/*.js", processJs);
  return gulp.watch("src/scripts/**/*.js", bundle);
}

gulp.task("watch:js", watchjs);
// gulp.task("watch:js", watchJs);
