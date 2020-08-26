import Controller from '@ember/controller';

export default class TutorialController extends Controller {
  codemirrorSettings={
    lineNumbers: true,
    mode: 'javascript'
  };
  codemirrorValue=
`'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    codemirror: {
      modes: ['javascript']
    }
  });
  return app.toTree();
};`;
}
