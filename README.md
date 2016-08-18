# karma-pug-preprocessor

> Preprocessor to compile Pug templates on the fly.

## Installation

The easiest way is to keep `karma-pug-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-pug-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-pug-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.pug': ['pug']
    }
  });
};
```

## Chaining preprocessors
The pug preprocessor can be used in conjunction with others (eg. [karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor)). Simply include it in an array that specifies the chain of processors.
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.pug': ['pug', 'ng-html2js']
    }
  });
};
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com

