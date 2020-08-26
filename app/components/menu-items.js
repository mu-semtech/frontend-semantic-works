import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';

export default class MenuItemsComponent extends Component {
  constructor(...args){
    super(...args);

    for(var i=0; i<this.args.level; i++){
      this.whitespace=htmlSafe(this.whitespace+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
    }
  }
  @tracked
  whitespace="";

  @tracked
  nextLevel=this.args.level+1;

  @action
  clickHandler(url){

  }
}
