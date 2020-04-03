const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify");
// const rename = require("gulp-rename");
const postcss = require("gulp-postcss");

function copy() {
  return gulp.src(["src/*.html", "src/**/*.svg"]).pipe(gulp.dest("build"));
}

sass.compiler = require("node-sass");
gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(postcss())
    .pipe(gulp.dest("build/styles"));
});

gulp.task("copy", copy);

function compileJs() {
  return (
    gulp
      .src("src/scripts/**/*.js")
      .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(uglify())
      // .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("build/scripts"))
  );
}
gulp.task("compileJs", compileJs);
