import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  score: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
