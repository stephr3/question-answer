import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        query: this.get('query'),
        notes: this.get('notes'),
        tag: this.get('tag')
      };
      this.sendAction('save', params);
    }
  }
});
