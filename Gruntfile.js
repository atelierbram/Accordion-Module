module.exports = function(grunt) {

    require('time-grunt')(grunt);

    var devmode = grunt.option('dev');

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      sass: {
        dist: {
          files: {
                'assets/css/style.css': 'assets/sass/style.scss'
          }
        }
      },

      autoprefixer: {
        options: {
          browsers: ['last 2 versions', '> 1%']
        },

        dist: {
          expand: true,
          flatten: true,
          files: {
            'assets/css/prefixed/style.css': 'assets/css/style.css'
          }
        }
      },

      cssmin: {
        dist: {
          files: {
          'assets/css/prefixed/style.min.css': 'assets/css/prefixed/style.css',
          }
        }
      },

      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'index.html': 'index-uncompressed.html'    // 'destination': 'source'
          }
        }
      },

      concat: {
         dist: {
           files: {
             'assets/js/concat.js' :  ['assets/js/dom-ready.js','assets/js/accordion.js']
           }
         }
       },

      uglify: {
        options: {
          preserveComments: 'some'
        },
        dist: {
          files: {
            'assets/js/all.min.js' : 'assets/js/concat.js'
          }
        }
      },

      hashres: {
         options: {
             fileNameFormat: '${name}.${ext}?${hash}',
             renameFiles: false
         },
         dist: {
             src: ['assets/js/all.min.js','assets/css/prefixed/style.min.css','assets/css/prefixed/style.min.css'],
             dest: 'dist/**/*.html'
        }
     },

      watch: {
        options: {
          livereload: true,
        },

        scss: {
            files: ['assets/**/*.scss'],
            tasks: ['scss','autoprefixer','cssmin','hashres'],
            options: {
              spawn: false
            }
        },

        js: {
            files: ['assets/js/**/*.js'],
            tasks: ['concat','uglify'],
            options: {
              spawn: false
            }
        },

        // https://github.com/gruntjs/grunt-contrib-watch#optionslivereload
      },


      // from the commandline run: grunt gh-pages to build the remote gh-pages branch:
      // https://github.com/tschaub/grunt-gh-pages

  });

    grunt.registerTask('build', ['concat', 'uglify', 'sass', 'autoprefixer', 'cssmin', 'htmlmin', 'hashres']);
    grunt.registerTask('scss', ['sass', 'autoprefixer', 'cssmin', 'hashres']);
    grunt.registerTask('js', ['uglify', 'concat']);
    grunt.registerTask('html', ['hashres']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);
    grunt.registerTask('dev', ['connect', 'watch']);
    // grunt.registerTask('default', ['build', 'connect', 'watch', 'assemble:component']);
    // grunt.registerTask('default', ['assemble:component']);

    grunt.loadNpmTasks('grunt-hashres', 'grunt-contrib-htmlmin', 'grunt-contrib-sass','grunt-contrib-watch','matchdep', 'grunt-autoprefixer');
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Default tasks to be run.
};
//    if (devmode) {
//        grunt.task.registerTask('hashres', function(){ console.log('Skipping hashres task because of --dev flag'); });
//        grunt.task.registerTask('uncss', function(){ console.log('Skipping uncss task because of --dev flag'); });
//    }
// };
