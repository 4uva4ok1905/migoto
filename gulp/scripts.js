import gulp from 'gulp';
import paths from './paths';

const scripts = () => {
    return gulp
        .src(paths.src.js)
        .pipe(gulp.dest(paths.dist.js));
};

export default scripts;
