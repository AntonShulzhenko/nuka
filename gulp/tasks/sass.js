import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import config from '../config';
import csso from 'postcss-csso';


const processors = [
  autoprefixer({
    browsers: ['last 4 versions'],
    cascade: false
  }),
  // require('lost'),
  // mqpacker({
  //   sort: sortMediaQueries
  // }),
  csso
];

gulp.task('sass', () => gulp
  .src(config.src.scss + '/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: config.production ? 'compact' : 'expanded', // nested, expanded, compact, compressed
      precision: 5
  }))
  .on('error', config.errorHandler)
  .pipe(postcss(processors))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.dest.css))
);

const build = gulp => gulp.parallel('sass');
const watch = gulp => () => gulp.watch(config.src.scss + '/**/*.scss', gulp.parallel('sass'));

module.exports.build = build;
module.exports.watch = watch;
