const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

let env = process.argv.slice(2)[0];
let tasks = env === '--dev' ? ['css', 'auto'] : ['css'];

gulp.task('css', function() {
  //vscode保存文件后，watch到变化，但执行css任务时文件还不可访问，故加一个延时
  setTimeout(() => {
    gulp
      .src('../src/styles/index.scss')
      .pipe(sass())
      .pipe(
        autoprefixer({
          browsers: ['last 2 versions', 'ie > 8']
        })
      )
      .pipe(cleanCSS())
      .pipe(rename('sui.css'))
      .pipe(gulp.dest('../dist/styles'));
  }, 500);
});

// 拷贝字体文件
// gulp.task('fonts', function() {
//   gulp
//     .src('../src/styles/common/iconfont/fonts/*.*')
//     .pipe(gulp.dest('../dist/styles/fonts'));
// });

gulp.task('auto', () => {
  gulp.watch('../src/styles/**/*.scss', ['css']);
});

gulp.task('default', tasks);
