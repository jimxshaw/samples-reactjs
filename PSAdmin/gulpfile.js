"use strict";

var gulp = require("gulp");
// Run a local dev server.
var connect = require("gulp-connect");
// Open a URL in a web browser.
var open = require("gulp-open");
// Bundle our JavaScript.
var browserify = require("browserify");
// Transform React JSX to JS.
var reactify = require("reactify");
// User conventional text streams with Gulp.
var source = require("vinyl-source-stream");

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        js: "./src/**/*.js",
        dist: "./dist",
        mainJs: "./src/main.js"
    }
};

// Start a local dev server.
gulp.task("connect", function () {
    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

// Open task depends on the connect task. So we do the 
// connect task dependency first and do this task.
// Go get index.html and the open it in the browser at a 
// specific url, which is the url we defined above. It'll be 
// opened at localhost port 9005.
gulp.task("open", ["connect"], function () {
    gulp.src("dist/index.html")
        .pipe(open({ uri: config.devBaseUrl + ":" + config.port + "/" }));
});

// Have gulp get our html files, put them in dist folder and perform some task. 
// In this particular task, we want gulp to reload our dev server. 
gulp.task("html", function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// We pass in the path we defined above. Transform our JS with one of our plugins,
// in this case it's reactify to compile JSX. Bundle all JS files, put them in 
// one file. As it's bundling and errors occur, we bind them to the console and 
// see errors on the console. Then define what our bundle would be named and define 
// a destination for this bundle. Finally, any time this task runs, we reload the browser.  
gulp.task("js", function () {
    browserify(config.paths.mainJs)
            .transform(reactify)
            .bundle()
            .on("error", console.error.bind(console))
            .pipe(source("bundle.js"))
            .pipe(gulp.dest(config.paths.dist + "/scripts"))
            .pipe(connect.reload());
});

// Watch certain files and whenever they change, run the appropriate tasks.
gulp.task("watch", function () {
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.js, ["js"]);
});

// This is a default task we want to run. When we goto the command line and 
// issue the gulp command, gulp will run the tasks in the array.
gulp.task("default", ["html", "js", "open", "watch"]);

