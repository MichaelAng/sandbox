(function () {
    'use strict';

    const bowerFiles = require('main-bower-files');
    const gulp = require('gulp');
    const inject = require('gulp-inject');
    const templateCache = require('gulp-angular-templatecache');
    const del = require('del');
    const plumber = require('gulp-plumber')
    const vinylPaths = require('vinyl-paths');

    // Files
    const index = [
        'client/index.html'
    ];

    const moduleOrder = [
        '.tmp/sandbox.module.js',
        '.tmp/**/*.module.js',
        '.tmp/**/*.js'
    ];

    const scripts = [
        'client/**/sandbox.module.js',
        'client/**/*.module.js',
        'client/**/*.js',

        /* dont load test files */
        '!client/**/*.spec.js'
    ];

    const styles = [
        'client/**/sandbox.styles.css'
    ];

    const views = [
        'client/**/*.tmpl.html'
    ];

    // Gulp Commands
    gulp.task('clean:tmp', function () {
        return gulp.src('.tmp/')
            .pipe(vinylPaths(del));
    });

    gulp.task('clean:public', function () {
        return gulp.src('public/')

            .pipe(vinylPaths(del));
    });

    gulp.task('stage:templateCache', function () {
        return gulp.src(views)
            .pipe(templateCache('sandbox.templateCache.js', {
                module: 'sandbox',
                standalone: false
            }))
            .pipe(gulp.dest('.tmp/'));
    });

    gulp.task('stage:tmp', function () {
        return gulp.src(['client/*', 'client/*/**', '!client/**/*.spec.js'])
            .pipe(gulp.dest('.tmp/'));
    });

    var vendorStream = gulp.src(['.tmp/*'], {read: false});
    var appStream = gulp.src(['.tmp/*/**.module.js'], {read: false});
    var appStream2 = gulp.src(['.tmp/*/**.js'], {read: false});

    gulp.task('script:index', function () {
        return gulp.src('.tmp/index.html')
            .pipe(inject(gulp.src(bowerFiles({
                overrides: {
                    bootstrap: {
                        main: [
                            './dist/js/bootstrap.js',
                            './dist/css/*.min.*',
                            './dist/fonts/*.*'
                        ]
                    }
                }
            }), {read: false}), {name: 'bower'}))
            .pipe(inject(gulp.src(moduleOrder, {read: false}), {relative: true}))
            .pipe(gulp.dest('public/'));
    });

    gulp.task('stage:public', function () {
        return gulp.src(['.tmp/*', '.tmp/*/**', '!.tmp/index.html'])
            .pipe(gulp.dest('public/'));
    });

    gulp.task('script:tmp', gulp.parallel(
        'stage:templateCache',
        'stage:tmp'
    ));

    gulp.task('clean', gulp.parallel(
        'clean:public',
        'clean:tmp'
    ));

    gulp.task('default', gulp.series(['script:tmp', 'script:index', 'stage:public', 'clean:tmp']))

    gulp.task('watch', function () {
        gulp.watch([index, scripts, styles, views], gulp.parallel(['default']));
    });
})();


