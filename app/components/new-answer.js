import Ember from 'ember';

export default Ember.Component.extend({
  showAddAnswer: false,
  actions: {
    showAddAnswer() {
      this.set('showAddAnswer', true);
    }
  }
});
