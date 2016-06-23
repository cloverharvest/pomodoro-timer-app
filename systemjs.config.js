(function() {

  var pathMappings = {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
  };

  var packages = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    'rxjs',
    'built',
  ];

  var packagesConfig = {};

  packages.forEach(function(packageName) {
    packagesConfig[packageName] = {
      main: 'index.js',
      defaultExtension: 'js'
    };
  });

  System.config({
    map: pathMappings,
    packages: packagesConfig,
  });

})();

//This file contains primarily an immediately invoked function expression.
//This means that this block of code will be executed as soon as it
//is parsed by the browser.
