import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {
    willTransition() {
    	// Reset the form
    	this.controller.set('emailAddress', '');
    	this.controller.set('message', '');
      // rollbackAttributes() removes the record from the store
      this.controller.get('model').rollbackAttributes();
    }
  }

});
