import EmberRouter from "@ember/routing/router";
import config from "./config/environment";
import RouterScroll from 'ember-router-scroll';

const Router = EmberRouter.extend( RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL
});

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

export default Router;
