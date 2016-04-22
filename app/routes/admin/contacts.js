import Ember from 'ember';

export default Ember.Route.extend({

	model() {
    return this.store.findAll('contact');
  },

  actions: {

  	deleteContact(contact) {
  		if (confirm('Are you sure you want to delete this message?')) {
  			contact.destroyRecord();
  		}
  	}

  }

});