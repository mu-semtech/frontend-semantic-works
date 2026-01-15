import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DocsController extends Controller {
  queryParams = ['doc'];

  @tracked doc = 'project-template';

  get currentDocUrl() {
    return this.docLookup[this.doc] || this.docLookup['project-template'];
  }

  @action
  changeDoc(id) {
    this.doc = id;
  }

  docLookup = {
    'project-template': 'https://raw.githubusercontent.com/mu-semtech/mu-project/master/README.md',
    'identifier': 'https://raw.githubusercontent.com/mu-semtech/mu-identifier/master/README.md',
    'dispatcher': 'https://raw.githubusercontent.com/mu-semtech/mu-dispatcher/master/README.md',
    'authorization-new': 'https://raw.githubusercontent.com/mu-semtech/sparql-parser/master/README.md',
    'authorization-old': 'https://raw.githubusercontent.com/mu-semtech/mu-authorization/master/README.md',
    'delta-notifier': 'https://raw.githubusercontent.com/mu-semtech/delta-notifier/master/README.md',
    'javascript-template': 'https://raw.githubusercontent.com/mu-semtech/mu-javascript-template/master/README.md',
    'ruby-template': 'https://raw.githubusercontent.com/mu-semtech/mu-ruby-template/master/README.md',
    'python-template': 'https://raw.githubusercontent.com/mu-semtech/mu-python-template/master/README.md',
    'login-service': 'https://raw.githubusercontent.com/mu-semtech/login-service/master/README.md',
    'registration-service': 'https://raw.githubusercontent.com/mu-semtech/registration-service/master/README.md',
    'resources-service': 'https://raw.githubusercontent.com/mu-semtech/mu-cl-resources/master/README.md',
    'file-service': 'https://raw.githubusercontent.com/mu-semtech/file-service/master/README.md',
    'migrations-service': 'https://raw.githubusercontent.com/mu-semtech/mu-migrations-service/master/README.md',
    'search': 'https://raw.githubusercontent.com/mu-semtech/mu-search/master/README.md',
    'cache': 'https://raw.githubusercontent.com/mu-semtech/mu-cache/master/README.md',
    'data-table': 'https://raw.githubusercontent.com/mu-semtech/ember-data-table/master/README.md',
    'login-addon': 'https://raw.githubusercontent.com/mu-semtech/ember-mu-login/master/README.md',
    'registration-addon': 'https://raw.githubusercontent.com/mu-semtech/ember-mu-registration/master/README.md',
    'transform-helpers': 'https://raw.githubusercontent.com/mu-semtech/ember-mu-transform-helpers/master/README.md',
    'mu-cli': 'https://raw.githubusercontent.com/mu-semtech/mu-cli/master/README.md',
    'homebrew-scripts': 'https://raw.githubusercontent.com/mu-semtech/homebrew-scripts/master/README.md',
    'openapi-generator': 'https://raw.githubusercontent.com/mu-semtech/cl-resources-openapi-generator/master/README.md',
  };

  docTree = [
    {
      "name": "Documentation",
      "link": false,
      "value": [
        {
          "name": "Core",
          "link": false,
          "value": [
            {"name": "Project template", "id": "project-template", "link": true},
            {"name": "Identifier", "id": "identifier", "link": true},
            {"name": "Dispatcher", "id": "dispatcher", "link": true},
            {"name": "Authorization (new)", "id": "authorization-new", "link": true},
            {"name": "Authorization (old)", "id": "authorization-old", "link": true},
            {"name": "Delta notifier", "id": "delta-notifier", "link": true}
          ]
        },
        {
          "name": "Templates",
          "link": false,
          "value": [
            {"name": "Javascript template", "id": "javascript-template", "link": true},
            {"name": "Ruby template", "id": "ruby-template", "link": true},
            {"name": "Python template", "id": "python-template", "link": true},
          ]
        },
        {
          "name": "Microservices",
          "link": false,
          "value": [
            {"name": "Login service", "id": "login-service", "link": true},
            {"name": "Registration service", "id": "registration-service", "link": true},
            {"name": "Resources service", "id": "resources-service", "link": true},
            {"name": "File service", "id": "file-service", "link": true},
            {"name": "Migrations service", "id": "migrations-service", "link": true},
            {"name": "Search", "id": "search", "link": true},
            {"name": "Cache", "id": "cache", "link": true},
          ]
        },
        {
          "name": "Ember addons",
          "link": false,
          "value": [
            {"name": "Data table", "id": "data-table", "link": true},
            {"name": "Login addon", "id": "login-addon", "link": true},
            {"name": "Registration addon", "id": "registration-addon", "link": true},
            {"name": "Transform helpers", "id": "transform-helpers", "link": true},
          ]
        },
        {
          "name": "Tools",
          "link": false,
          "value": [
            {"name": "mu-cli", "id": "mu-cli", "link": true},
            {"name": "Homebrew scripts", "id": "homebrew-scripts", "link": true},
            {"name": "OpenAPI generator", "id": "openapi-generator", "link": true},
          ]
        }
      ]}
  ];
}
