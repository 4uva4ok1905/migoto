import gulp from 'gulp';
import paths from './paths';
import mode from "gulp-mode";
import webpackStream from 'webpack-stream';
import named from 'vinyl-named';

const scripts = () => {
    return gulp
        .src(paths.src.js)
        .pipe(named())
        .pipe(webpackStream({
            mode: mode().development() ? 'development' : 'production',
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test: /node_modules/,
                            chunks: "initial",
                            name: "vendor",
                            enforce: true
                        }
                    }
                }
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: ['babel-loader'],
                    },
                ],
            },
        }))
        .pipe(gulp.dest(paths.dist.js));
};

export default scripts;
