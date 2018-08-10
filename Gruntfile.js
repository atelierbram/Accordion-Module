module.exports = function(grunt) {

  require('time-grunt')(grunt);

  var devmode = grunt.option('dev');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        implementation: require('node-sass'),
        sourceMap: true
      },
      dist: {
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },

    postcss: {
      options: {
        map: {
          inline: false, // save all sourcemaps as separate files...
          // annotation: 'assets/css/maps/' // ...to the specified directory
        },
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')(),
        ]
      },

      dist: {
        expand: true,
        flatten: true,
        files: {
          // 'assets/css/prefixed/style.css': 'assets/css/style.css'
          'docs/assets/css/style.min.css': 'assets/css/style.css',
        }
      }
    },

    // cssmin: {
    //   dist: {
    //     files: {
    //       'docs/assets/css/style.min.css': 'assets/css/prefixed/style.css',
    //     }
    //   }
    // },

    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                              // Dictionary of files
          'docs/index.html': 'index.html'    // 'destination': 'source'
        }
      }
    },

    concat: {
      dist: {
        files: {
          // 'assets/js/concat.js' :  ['assets/js/accordion.js','assets/js/dynamic-max-height-value.js', 'assets/js/accordion-init.js']
          'assets/js/concat.js' :  ['assets/js/accordion.js','assets/js/dynamic-max-height-value.js']
        }
      }
    },

    uglify: {
      options: {
        preserveComments: /^!/
        // only preserve comments that start with a bang
        // https://github.com/gruntjs/grunt-contrib-uglify/issues/366
      },
      dist: {
        files: {
          'docs/assets/js/all.min.js' : 'assets/js/concat.js'
        }
      }
    },


    watch: {
      options: {
        livereload: 35729,
      },

      scss: {
        files: ['assets/**/*.scss'],
        tasks: ['scss','postcss'],
        options: {
          // spawn: false
        }
      },

      js: {
        files: ['assets/js/**/*.js'],
        tasks: ['concat','uglify'],
        options: {
          // spawn: false
        }
      },
    },


    // from the commandline run: grunt gh-pages to build the remote gh-pages branch:
    // https://github.com/tschaub/grunt-gh-pages

  });

  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'postcss:dist', 'htmlmin']);
  grunt.registerTask('scss', ['sass', 'postcss:dist']);
  grunt.registerTask('js', ['uglify', 'concat']);
  grunt.registerTask('default', ['build', 'watch']);
  grunt.registerTask('dev', ['watch']);

  grunt.loadNpmTasks('grunt-sass','grunt-contrib-htmlmin','grunt-contrib-concat','grunt-contrib-uglify','grunt-contrib-watch','grunt-postcss');
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
