var gulp = require("gulp");
var jade = require("gulp-jade");
var sass = require("gulp-sass");
var cleancss = require("gulp-clean-css");//压缩CSS
var miniJs = require("gulp-uglify");//压缩JS

gulp.task("default",["watch"]);
gulp.task("watch",function(){
    gulp.watch("Sass/*.scss",["sass"]);
    gulp.watch("Jade/*.jade",["jade"]);
    gulp.watch("Js/*.js",["js"]);
});

// gulp.task("Jade",function(){
//     gulp.src("Jade/xxx.Jade")
//         .pipe(data(function (file) {
//             return require(__dirname+"/JSON/xxx.json");
//         }))
//         .pipe(Jade({pretty:true}))//不压缩Html
//         .pipe(gulp.dest("HTML/"))
// })

gulp.task("jade",function(){
    gulp.src("Jade/*.jade")
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest("HTML"))
});
gulp.task("sass",function(){
    return gulp.src("./Sass/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(cleancss())
        .pipe(gulp.dest("CSS"))
});
gulp.task("js",function(){
    gulp.src("JS/*.js")
        .pipe(miniJs())
        .pipe(gulp.dest("JS/js压缩"))
});