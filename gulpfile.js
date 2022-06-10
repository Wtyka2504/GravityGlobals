const { src, dest, watch, series, parallel } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const htmlmin = require("gulp-htmlmin");
var replace = require("gulp-replace");

// File paths
const files = {
  scssPath: {
    src: "src/scss/**/*.scss",
  },
  jsPath: {
    src: "src/js/**/*.js",
  },
  htmlPath: {
    src: "src/index.html",
  },
};

function scssTask() {
  return src(files.scssPath.src)
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
    .pipe(dest("dist")); // put final CSS in dist folder
}

function jsTask() {
  return src([files.jsPath.src])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
}

function indexTask() {
  return src(files.htmlPath.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("."));
}

var cbString = new Date().getTime();
function cacheBustTask() {
  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + cbString))
    .pipe(dest("."));
}

function watchTask() {
  let filesToWatch = [];
  for (const f in files) {
    let prop = files[f];
    if (!prop.src || prop.watch === false) continue;
    filesToWatch.push(prop.src);
  }
  watch(filesToWatch, parallel(indexTask, scssTask, jsTask));
}

exports.default = series(
  parallel(scssTask, jsTask, indexTask),
  cacheBustTask,
  watchTask
);
