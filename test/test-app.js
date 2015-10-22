'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('iso-alt:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ packageName: 'My Package' })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.eslintrc',
      '.gitignore',
      'gulpfile.js',
      'index.js',
      'package.json',
      'README.md',
      'webpack.config.js'
    ]);
  });
});
