module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-ngdocs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    ngdocs: {
      options : {
        scripts : ['angular.js'],
        html5Mode: false 
      },
      all: ['./src/*.js'],
    },
    clean: ['docs'],
    watch: {
      all : {
        files : ['src/*.js'],
        tasks : ['clean', 'ngdocs']
      },
      options: {livereload: true }
    },
    connect: {
      all : {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: ['docs/'],
          livereload: true
        }
      }
    },
  });

  grunt.registerTask('serve', ['ngdocs', 'connect', 'watch']);
  grunt.registerTask('default', ['clean', 'ngdocs']);
};
