import Ember from 'ember';

export function formatYear(params/*, hash*/) {
	let date = params[0];
  return date.getFullYear();
}

export default Ember.Helper.helper(formatYear);