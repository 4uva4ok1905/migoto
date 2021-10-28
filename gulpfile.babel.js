import gulp from 'gulp';
import paths from './gulp/paths';
import { serve, browserSync } from './gulp/serve';
import html from './gulp/html';
import styles from './gulp/styles';
import clean from './gulp/clean';
import images from "./gulp/images";
import sprite from "./gulp/sprite";


const watch = (done) => {
  gulp.watch(paths.watch.html).on('change', gulp.series(html, browserSync.reload));
  gulp.watch(paths.watch.scss).on('change', gulp.series(styles, browserSync.reload));
  // gulp.watch(paths.watch.js).on('change', gulp.series(scripts, browserSync.reload));
  gulp.watch(paths.watch.images, gulp.series(images, browserSync.reload));
  gulp.watch(paths.watch.sprite, gulp.series(sprite, browserSync.reload));
  done();
};

export const start = gulp.series(
    clean,
    gulp.parallel(images, sprite, styles, html),
    watch,
    serve,
);

// export const start = gulp.series(
//   clean,
//   gulp.parallel(images, sprite, fonts, styles, scripts, html),
//   watch,
//   serve,
// );
//
export const build = gulp.series(
  clean,
  gulp.parallel(images, sprite, styles, html),
);
