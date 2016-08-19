import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
