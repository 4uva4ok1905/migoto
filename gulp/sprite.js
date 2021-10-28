import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import svgmin from 'gulp-svgmin';
import paths from "./paths";

const svgminOptions = {
    plugins: [
        {removeViewBox: false},
        {cleanupIDs: false},
        {removeComments: true},
        {removeEmptyContainers: true},
    ],
};

const svgSpriteOptions = {
    mode: {
        symbol: {
            sprite: '../icons.svg',
        },
    },
};

const sprite = () => {
    return gulp
        .src(paths.src.sprite)
        .pipe(svgmin(svgminOptions))
        .pipe(svgSprite(svgSpriteOptions))
        .pipe(gulp.dest(paths.dist.images));
};

export default sprite;
