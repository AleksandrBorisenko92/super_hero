var {series, src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var fileInclude = require('gulp-file-include');

function file() {
	return src(['../html/*.html'])
		.pipe(fileInclude())
		.pipe(dest('../_html'));
}

function scss() {
	var stream = src('../assets/scss/*.scss');
	return streamPipes(stream);
}

function streamPipes(stream) {
	return stream
		.pipe(changed('../assets/css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(["last 5 version"], {
            cascade: false
        }))
        .pipe(cleanCSS())
		.pipe(dest('../assets/css'));
}

function watcher() {
	return watch(['../assets/scss/*.scss'], scss);
}

exports.file = file;
exports.scss = scss;
exports.watch = function () {
	watch('../assets/scss/*.scss', scss);
	watch('../html/*.html', series(file));
}