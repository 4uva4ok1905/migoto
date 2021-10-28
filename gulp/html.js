import gulp from 'gulp';
import paths from './paths';
import htmlmin from 'gulp-htmlmin';
import mode from 'gulp-mode';

const htmlminOptions = {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeRedundantAttributes: true,
    removeEmptyAttributes: true,
};

const html = () => {
    return gulp
        .src(paths.src.html)
        .pipe(mode().production(htmlmin(htmlminOptions)))
        .pipe(gulp.dest(paths.dist.html));
};

export default html;
