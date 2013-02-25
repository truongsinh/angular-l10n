'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').concat(['gruntacular']).forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    lint: {
      options: {
        coffeehintrc: '.coffeelintrc'
      },
      all: [
        'angular-l10n.coffee'
      ]
    },
    coffee: {
      options: {
        bare: true
      },
      dist: {
        expand: true, // Enable dynamic expansion.
        cwd: '', // Src matches are relative to this path.
        src: '**/*.coffee', // Actual pattern(s) to match.
        dest: '', // Destination path prefix.
        ext: '.js'                        // Dest filepaths will have this extension.
      },
      test: {
        expand: true,
        cwd: 'test',
        src: '**/*.coffee',
        dest: '.tmp/test',
        ext: '.js'                        // Dest filepaths will have this extension.
      }
    }
  });

  grunt.renameTask('coffeelint', 'lint');
  grunt.registerTask('test', [
    'lint',
    'coffee',
  ]);
  grunt.registerTask('default', ['test']);
};
