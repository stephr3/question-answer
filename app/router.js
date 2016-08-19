import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new');
  this.route('question', {path: '/question/:question_id'});
  this.route('science');
  this.route('tech');
  this.route('entertainment');
  this.route('relationships');
  this.route('random');
});

export default Router;
