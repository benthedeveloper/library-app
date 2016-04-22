import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	message: '',
	isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isMessageValid: Ember.computed.gte('message.length', 5),
	isValid: Ember.computed.and('isEmailValid', 'isMessageValid'),
	isDisabled: Ember.computed.not('isValid'),
	actions: {
		send() {
			const email = this.get('emailAddress');
			const message = this.get('message');
			const newMessage = this.store.createRecord('contact', {
				email: email,
				message: message
			});
			newMessage.save().then(() => {
				// After saving record, set the response message, display it for 7 seconds, then reset it to empty string.
				this.set('responseMessage', 'Your message has been sent. We will get back to you as soon as possible. Thank you.');
				setTimeout(() => {
					Ember.$('#responseMessage').fadeOut();
					this.set('responseMessage', '');
				}, 7000);
				// Reset the form
				this.set('emailAddress', '');
				this.set('message', '');
			});
		}
	}
});