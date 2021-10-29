import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import mode from 'gulp-mode';
import paths from './paths';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cssnano from "cssnano";
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";

const sass = gulpSass(dartSass);

const styles = () => {
    return gulp.src(paths.src.scss)
        .pipe(mode().development(sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(mode().production(postcss([autoprefixer(), cssnano()])))
        .pipe(mode().development(sourcemaps.write()))
        .pipe(gulp.dest(paths.dist.css));
};

export default styles;

// import fs from 'fs';
// import gulp from 'gulp';
// import sourcemaps from 'gulp-sourcemaps';
// import plumber from 'gulp-plumber';
// import sass from 'gulp-sass';
// import postcss from 'gulp-postcss';
// import autoprefixer from 'autoprefixer';
// import cssnano from 'cssnano';
// import rename from 'gulp-rename';
// import notify from 'gulp-notify';
// import mode from 'gulp-mode';
// import paths from './paths';
//
// const sassOptions = {
//     outputStyle: 'compressed',
//     sourceMap: true,
//     precision: 3,
//     errLogToConsole: true,
// };
//
// const styles = () => {
//     return Promise.resolve(
//         fs
//             .readdirSync(paths.src.css)
//             .filter(filename => filename.endsWith('.scss'))
//             .forEach(filename => {
//                 gulp.src(`${paths.src.css}/${filename}`)
//                     .pipe(plumber())
//                     .pipe(mode().development(sourcemaps.init()))
//                     .pipe(sass(sassOptions).on('error', notify.onError()))
//                     .pipe(mode().production(postcss([autoprefixer(), cssnano()])))
//                     .pipe(mode().development(sourcemaps.write()))
//                     .pipe(rename(`${filename.replace('.scss', '')}.min.css`))
//                     .pipe(gulp.dest(paths.dist.css));
//             }),
//     );
// };
//
// export default styles;
