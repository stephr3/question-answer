import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        score: this.get('score'),
        question: this.get('question')
      };
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
