const sourceFolder = 'src';
const distFolder = 'dist';

const paths = {
    sourceFolder,
    distFolder,
    src: {
        html: `${sourceFolder}/pages/*.html`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        js: `${sourceFolder}/js/*.js`,
        images: [
            `${sourceFolder}/images/**/*.{png,jpg,jpeg,webp,svg}`,
            `!${sourceFolder}/images/svg-sprite/**/*.svg`,
        ],
        sprite: `${sourceFolder}/images/svg-sprite/**/*.svg`,
        fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    },
    watch: {
        html: `${sourceFolder}/**/*.html`,
        scss: `${sourceFolder}/scss/**/*.scss`,
        js: `${sourceFolder}/**/*.js`,
        images: [
            `${sourceFolder}/images/**/*.{png,jpg,jpeg,webp,svg}`,
            `!${sourceFolder}/images/svg-sprite/**/*.svg`,
        ],
        sprite: `${sourceFolder}/images/svg-sprite/**/*.svg`,
        fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    },
    dist: {
        html: `${distFolder}`,
        css: `${distFolder}/css`,
        js: `${distFolder}/js`,
        images: `${distFolder}/images`,
        fonts: `${distFolder}/fonts`,
    },
    clean: `${distFolder}`,
};

export default paths;
