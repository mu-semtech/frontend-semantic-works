import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class MenuItemsComponent extends Component {
  constructor(...args){
    super(...args);
    let whitespace = "";
    for(var i=0; i<this.args.level; i++){
      whitespace = htmlSafe(whitespace + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
    }
    this.whitespace = whitespace;
  }
  @tracked
  whitespace="";

  @tracked
  nextLevel=this.args.level+1;

  @action
  clickHandler(url){

  }
}
