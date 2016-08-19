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
    },
    delete(question) {
      if(confirm('Are you sure you want to delete this question?')) {
        this.sendAction('delete', question);
      }
    }
  }
});
