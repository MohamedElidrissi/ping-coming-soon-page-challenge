const { src, dest, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const minifyCSS = require("gulp-csso");

function css() {
  return src("styles/main.css")
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(dest("dist/css"));
}

exports.watch = function() {
  watch(["styles/*.css"], function(done) {
    css();
    done();
  });
};

exports.default = exports.css = css;
