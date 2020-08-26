import Controller from '@ember/controller';

export default class DocsController extends Controller {

  docTree=[
    {"name": "Documentation", "link": false, "value":[
      {"name": "Essentials", "link": false, "value":[
        {"name": "Mu-project", "value":"https://raw.githubusercontent.com/mu-semtech/mu-project/master/README.md", "link": true},
        {"name": "Mu-javascript-template", "value":"https://raw.githubusercontent.com/mu-semtech/mu-javascript-template/master/README.md", "link": true},
        {"name": "Mu-dispatcher", "value":"https://raw.githubusercontent.com/mu-semtech/mu-dispatcher/master/README.md", "link": true}
      ]},
      {"name": "Micro-services", "link": false, "value":[
        {"name": "Mu-Authorization", "value":"https://raw.githubusercontent.com/mu-semtech/mu-authorization/master/README.md", "link": true}
      ]}
    ]}
  ];
}
