const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
// const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const compiler = require("webpack");
const webpack = require("webpack-stream");

function copy() {
  return gulp.src(["src/*.html", "src/**/*.svg"]).pipe(gulp.dest("build"));
}

sass.compiler = require("node-sass");
gulp.task("sass", function () {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(postcss())
    .pipe(gulp.dest("build/styles"));
});

// gulp.task("copy", copy);

// function compileJs() {
//   return (
//     gulp
//       .src("src/scripts/**/*.js")
//       .pipe(babel({ presets: ["@babel/env"] }))
//       .pipe(uglify())
//       // .pipe(rename({ suffix: ".min" }))
//       .pipe(gulp.dest("build/scripts"))
//   );
// }

function bundle() {
  return gulp
    .src("src/scripts/main.js")
    .pipe(webpack(require("./webpack.config"), compiler))
    .pipe(gulp.dest("build/dev"));
}

// function watchJs() {
//   gulp.watch("src/scripts/*.js", processJs);
// }
// function watchjs() {
//   // return gulp.watch("src/scripts/**/*.js", processJs);
//   return gulp.watch("src/scripts/**/*.js", bundle);
// }
// gulp.task("compileJs", compileJs);
gulp.task("copy", copy);
gulp.task("compileJs", bundle);
