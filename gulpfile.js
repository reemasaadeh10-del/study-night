import gulp from "gulp";
import shell from "gulp-shell";

const build = shell.task("parcel starter/index.html");
const test = shell.task("mocha test/shuffle.js");
const e2e = shell.task("npx cypress run");

export {build as default, test , e2e};