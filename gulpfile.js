(function () {
    'use strict';

    var gulp = require('gulp');

    gulp.task('default', function() {
         return gulp.src(['client/*'])
            .pipe(gulp.dest('./images'));
    });

})();
