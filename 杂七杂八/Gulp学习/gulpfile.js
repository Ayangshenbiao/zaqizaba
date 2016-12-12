// 引入 require("引入的插件名称");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var gulp = require("gulp");

// 写任务 默认任务名 是较default
// gulp.task("gulp",function(){
// 	gulp.src("gulp")
// //  pipe管道
// 	.pipe(gulp())
// });

gulp.task("jade",function(){
	gulp.src("jade/*.jade")
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest("html"))
});

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("CSS"))
})


var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', () =>
    gulp.src('CSS/index.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

