import Ember from 'ember';

export default Ember.Controller.extend({
	sortProperties: ['title', 'year', 'library.name', 'author.name'],
	sortedBooks: Ember.computed.sort('model', 'sortProperties')
});