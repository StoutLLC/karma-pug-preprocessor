var pug = require('pug');

var createPugPreprocessor = function(logger, basePath) {
  var log = logger.create('preprocessor.pug');

  return function(content, file, done) {
    var processed = null;

    log.debug('Processing "%s".', file.originalPath);
    file.path = file.originalPath.replace(/\.pug$/, '.html');

    var templateName = file.originalPath.replace(/^.*\/([^\/]+)\.pug$/, '$1');

    try {
        var pugOptions = {
            filename: file.originalPath,
            client: true,
            pretty: true
        };
        processed = pug.render(content, pugOptions);    
    } catch (e) {
      log.error('%s\n  at %s', e.message, file.originalPath);
    }
    log.debug('Processed content as:\n%s', processed);
    done(processed);
  };
};

createPugPreprocessor.$inject = ['logger', 'config.basePath'];

// PUBLISH DI MODULE
module.exports = {
  'preprocessor:pug': ['factory', createPugPreprocessor]
};
