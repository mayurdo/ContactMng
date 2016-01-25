var gulp=require("gulp");

var jshint=require("gulp-jshint");
var concat=require("gulp-concat");
var rename=require("gulp-rename");
var uglify=require("gulp-uglify");
var webserver=require("gulp-webserver");

gulp.task('lint',function(){
    return gulp.src('js/*.js')
                .pipe(jshint())
                .pipe(jshint.reporter('default'));
});

gulp.task('scripts',function() {
    return gulp.src(['app/js/*.js','app/js/factory/*.js','app/js/directive/*.js','app/js/controller/*.js'])
                .pipe(concat('main.js'))
                .pipe(gulp.dest('appDist'))
                .pipe(rename('main.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('appDist'));
});

gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['lint', 'scripts']);
});

gulp.task('webserver',function() {
    return gulp.src('.')
                .pipe(webserver({
                        host: process.env.IP || 'localhost',
                        port: process.env.PORT || 8081,
                        livereload: true,
                        open: true
                }));
});


gulp.task('build',['lint','scripts']);
