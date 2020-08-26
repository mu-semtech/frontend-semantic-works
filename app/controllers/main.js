import Controller from '@ember/controller';

export default class MainController extends Controller {
  rubyMirrorSettings = {
    lineNumbers: true,
    mode: 'ruby'
  };
  rubyMirrorValue=
`get '/hello/' do
  counter = query( "SELECT COUNT (*) as ?counter" +
                   "WHERE {" +
                   "  ?s ?p ?o." +
                   "}" ).first[:counter].to_i
  status 200
  { value: counter }.to_json
end`;
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
