var gulp = require("gulp");
var FwdRef = require("undertaker-forward-reference");
gulp.registry(FwdRef());

var babel = require("gulp-babel")

var tsc = require("gulp-typescript").createProject("./tsconfig.json", {
  allowJs: true,
  removeComments: true,
  target: "esnext",
  module: "esnext"
})



gulp.task("transform", () => {
  return gulp.src("build/**/*.{js,jsx}")
  .pipe(
    babel({
      plugins: [
        [require.resolve("./tools/babel-export-top-level-stuff")]
      ],
      comments: false
    })
  )
  .pipe(gulp.dest("temp"))
})

gulp.task("tsformat", () => {
  return gulp.src("build/**/*.{js,jsx}")
  .pipe(tsc())
  .pipe(gulp.dest("build/nocomments"))
})



gulp.task('js-compile', function () {
  const closureCompiler = require('google-closure-compiler').gulp();
  
  return gulp.src('./src/js/**/*.js', {base: './'})
      .pipe(closureCompiler({
          compilation_level: 'SIMPLE',
          warning_level: 'VERBOSE',
          language_in: 'ECMASCRIPT6_STRICT',
          language_out: 'ECMASCRIPT5_STRICT',
          output_wrapper: '(function(){\n%output%\n}).call(this)',
          js_output_file: 'output.min.js'
        }, {
          platform: ['native', 'java', 'javascript']
        }))
      .pipe(gulp.dest('./dist/js'));
});

gulp.task("minify", function () {
  let closure = require("@ampproject/rollup-plugin-closure-compiler");
  let { terser } = require("rollup-plugin-terser");
  let rollup = require("./tools/vinyl-rollup")
  return gulp
    .src(["./src/**/*{.js,.jsx,.ts,.tsx}"])
    .src(["./src/**/*{.js,.jsx,.ts,.tsx}"])
    .pipe(typescript())
    //.pipe(babel(BABEL_CONFIG))
    .pipe(
      rollup({
        input: "src/app/main.js",
        output: {
          format: "esm",
        },
        external: Object.keys(require("./package.json").dependencies),
        treeshake: {
          moduleSideEffects: false,
        },
        inlineDynamicImports: true,
        plugins: [
          //terser(),
          //closure()
        ],
        onwarn: function (message) {
          if (/external dependency/.test(message)) {
            return;
          }
          if (message.code === "CIRCULAR_DEPENDENCY") {
            return;
          }
          if (message.code === "INPUT_HOOK_IN_OUTPUT_PLUGIN") {
            return;
          } else console.error(message);
        },
      })
    )
    .pipe(gulp.dest("build"));
});