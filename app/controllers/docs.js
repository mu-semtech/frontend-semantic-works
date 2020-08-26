import Controller from '@ember/controller';

export default class DocsController extends Controller {

  docTree=[
    {"name": "Documentation", "value":[
      {"name": "Essentials", "value":[
        {"name": "Mu-project", "value":"https://raw.githubusercontent.com/mu-semtech/mu-project/master/README.md"},
        {"name": "Mu-javascript-template", "value":"https://raw.githubusercontent.com/mu-semtech/mu-javascript-template/master/README.md"},
        {"name": "Mu-dispatcher", "value":"https://raw.githubusercontent.com/mu-semtech/mu-dispatcher/master/README.md"}
      ]},
      {"name": "Micro-services", "value":[
        {"name": "Mu-Authorization", "value":"https://raw.githubusercontent.com/mu-semtech/mu-authorization/master/README.md"}
      ]}
    ]}
  ];
}
