import Ember from 'ember';

export default Ember.Component.extend({
  showEditQuestion: false,
  actions: {
    showEditQuestion() {
      this.set('showEditQuestion', true);
    }
  }
});
