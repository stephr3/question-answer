import Ember from 'ember';

export default Ember.Component.extend({
  showEditQuestion: false,
  actions: {
    showEditQuestion() {
      this.set('showEditQuestion', true);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
      this.set('showEditQuestion', false);
    }
  }
});
