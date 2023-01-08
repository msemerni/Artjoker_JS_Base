import gulp from "gulp";
import include from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import csso from "gulp-csso";
import rename from "gulp-rename";
import concat from "gulp-concat";
import jsmin from "gulp-jsmin";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import {deleteAsync} from 'del';
import typescript from "gulp-typescript";
import browserSync from "browser-sync";
import ttf2woff2 from "gulp-ttf2woff2";
import imagemin from "gulp-imagemin";

import sass from "sass";
import gulpSass from "gulp-sass";
const gulpScss = gulpSass(sass);

const path = {
  base: "./src/",
  html: "**/**.html",
  scss: "scss/**/**.scss",
  ts: "ts/**.ts",
//   font: "fonts/*.ttf",
  dist: "dist/",
  css: "css/main.css",
  js: "main.js",
  // img: "img/",
  javascript: "js/**.js",
};

function html(cb) {
  gulp.src(path.base + path.html)
    .pipe(include({prefix: "@@"}))
    // .pipe(htmlmin({collapseWhitespace: true}))  /// РАСКОММЕНТИТЬ СТРОКУ
    .pipe(gulp.dest(path.dist));
  cb();
}

function scss(cb) {
  gulp.src(path.base + path.scss)
    .pipe(gulpScss())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 2 versions"],
      cascade: false,
    }))
    .pipe(concat(path.css))
    .pipe(gulp.dest(path.dist)) // УДАЛИТЬ СТРОКУ
    .pipe(csso())
    .pipe(rename({suffix: ".min"}))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.dist));
  cb();
}

function ts() {
    return gulp.src(path.base + path.ts)
      .pipe(typescript({
        outFile: path.js,
        noImplicitAny: false,
        target: "ES6",
      }))
      .pipe(sourcemaps.init())
      .pipe(jsmin())
      .pipe(rename({suffix: ".min"}))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(path.dist));
  }

  function js () {
    return gulp.src(path.base + path.javascript)
      .pipe(jsmin())
      .pipe(rename({suffix: ".min"}))
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest(path.dist))

      // .pipe(browserSync.stream());
  };

function font() {
    return gulp.src(['./src/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,svg}'])
      .pipe(ttf2woff2({ ignoreExt: true }))
      .pipe(gulp.dest('./dist/fonts'));
};

function img(){
  return gulp.src('./src/img/**/*.{jpg,jpeg,svg,png,gif}')
    .pipe(imagemin({
      verbose: true
    }))
    .pipe(gulp.dest('./dist/img'));
};

function clean() {
  return deleteAsync(path.dist);
}

function sync() {
  browserSync({
    port: 3005,
    server: path.dist,
    open: false,
  });

  gulp.watch(path.base + path.html, html).on("all", browserSync.reload);
  gulp.watch(path.base + path.scss, scss).on("all", browserSync.reload);
  gulp.watch(path.base + path.ts, ts).on("all", browserSync.reload);
  gulp.watch(path.base + path.js, js).on("all", browserSync.reload);
}

gulp.task("build", gulp.series(clean, font, html, scss, img, ts, js));
gulp.task("default", sync);

export {html, font, scss, img, ts, js, clean, sync};
