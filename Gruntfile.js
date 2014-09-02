module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      filename: 'eaccounting',
      jshint: {
        all: ['app/js/*.js', 'app/js/**/*.js']
      },
      injector: {
        options: {
          bowerPrefix: "bower:",
          min: true,
          ignorePath: "app/"
        },
        local_dependencies: {
          files: {
            'app/index.html': ['app/js/*.js', 'app/js/**/*.js', 'app/css/*.css'],
          }
        },
        bower_dependencies: {
          files: {
            'app/index.html': ['bower.json'],
          }
        }
      },
      less: {
          development: {
            options: {
              compress: false
            },
            files: {
              // target.css file: source.less file
              "app/css/app.css": "app/css/app.less"
            }
          }
      },
      watch: {
          less: {
            // rebuild if files in src changes
            files: ['app/css/**'],
            tasks: ['less'],
            options: {
              livereload: true
            }
          }
      }
    });
    
    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', [
        //'jshint',
        'less',
        'injector'
    ]);
    
    // Default task(s).
    grunt.registerTask('default', ['build']);
};

