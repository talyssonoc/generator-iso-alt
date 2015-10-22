'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var slug = require('slug');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the delightful ' + chalk.red('IsoAlt') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'packageName',
      message: 'What is the name of your awesomorphic app?',
      default: 'awesomorphic-app',
      validate: function(name) {
        return !!name;
      }
    }];

    this.prompt(prompts, function (props) {
      this.name = props.packageName;
      this.slugName = slug(props.packageName, {
        lower: true
      });

      done();
    }.bind(this));
  },

  writing: {
    config: function () {
      this.template('_babelrc', '.babelrc', this.context);
      this.template('_editorconfig', '.editorconfig', this.context);
      this.template('_eslintrc', '.eslintrc', this.context);
      this.template('_gitignore', '.gitignore', this.context);
      this.template('gulpfile.js', 'gulpfile.js', this.context);
      this.template('package.json', 'package.json', this.context);
      this.template('README.md', 'README.md', this.context);
    },

    projectfiles: function () {
      this.template('webpack.config.js', 'webpack.config.js', this.context);
      this.template('index.js', 'index.js', this.context);
      this.directory('app', 'app', this.context);
      this.directory('config', 'config', this.context);
    }
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false,
      skipInstall: this.options['skip-install'],
      callback: function() {
        console.log('Everything installed, run ' + chalk.green('npm run dev') + '.')
      }
    });
  }
});
