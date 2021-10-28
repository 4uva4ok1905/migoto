import gulp from 'gulp';
import paths from './paths';


const images = () => {
    return gulp
        .src(paths.src.images)
        .pipe(gulp.dest(paths.dist.images));
};

export default images;
