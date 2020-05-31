import config from "./config/environment";
import EmberRouterScroll from 'ember-router-scroll';

export default class Router extends EmberRouterScroll {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('documentation', function() {
    this.route('core', function() {
      this.route('from-repository', { path: ":repository" });
    });
    this.route('templates', function() {
      this.route('roll-your-own');
      this.route('from-repository', { path: ":repository" });
    });
    this.route('under-construction', { path: ":key" });
  });
});
