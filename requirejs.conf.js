require.config({
  paths: {
    jquery: 'lib/jquery/jquery',
    underscore: 'lib/underscore/underscore',
    backbone: 'lib/backbone/backbone',
    mustache: 'lib/mustache/mustache',
    text: 'lib/requirejs-text/text',
    jasmine: 'lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': 'lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': 'lib/jasmine-jquery/lib/jasmine-jquery',
    fyre: 'http://zor.t402.livefyre.com/wjs/v3.0/javascripts/livefyre',
    base64: 'lib/base64/base64'
  },
  packages: [{
    name: 'streamhub-backbone',
    location: 'lib/streamhub-backbone'
  },{
    name: 'streamhub-sdk',
    location: 'lib/streamhub-sdk/src'
  }
  ],
  shim: {
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    'jasmine-jquery': {
      deps: ['jquery', 'jasmine']
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
        exports: '_'
    },
    jquery: {
        exports: '$'
    }
  },
  urlArgs: "_=" +  (new Date()).getTime()
});
