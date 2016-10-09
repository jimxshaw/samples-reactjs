"use strict";

var gulp = require("gulp");
// Run a local dev server.
var connect = require("gulp-connect");
// Open a URL in a web browser.
var open = require("gulp-open");

var config = {
    port: 9005,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        dist: "./dist"
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

// Watch the html file and whenever it changes, run the html task.
gulp.task("watch", function () {
    gulp.watch(config.paths.html, ["html"]);
});

// This is a default task we want to run. When we goto the command line and 
// issue the gulp command, gulp will run the tasks in the array.
gulp.task("default", ["html", "open", "watch"]);


