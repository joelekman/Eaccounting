module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
//      'app/lib/angular/angular.js',
//      'app/lib/angular/angular-*.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap.js',
      'app/js/**/*.js',
      'test/unit/*.js'
    ],

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js',
      'app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
