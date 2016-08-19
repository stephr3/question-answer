import Ember from 'ember';

export default Ember.Component.extend({
  showAddAnswer: false,
  actions: {
    showAddAnswer() {
      this.set('showAddAnswer', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        score: 0,
        question: this.get('question')
      };
      this.set('showAddAnswer', false);
      this.sendAction('saveAnswer', params);
      this.set('author', "");
      this.set('date', "");
      this.set('content', "");
    }
  }
});
