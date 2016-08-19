import Ember from 'ember';

export default Ember.Component.extend({
  showEditAnswer: false,
  actions: {
    deleteAnswer(answer) {
      if(confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('deleteAnswer', answer)
      }
    },
    showEditAnswer() {
      this.set('showEditAnswer', true);
    },
    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
      this.set('showEditAnswer', false);
    }
  }
});
