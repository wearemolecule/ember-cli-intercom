import Ember from 'ember'

export function initialize() {
  Ember.Router.reopen({
    intercom: Ember.inject.service(),

    trackTransition: Ember.on('didTransition', function() {
      let message = `visited ${this.get('url')}`;

      this.get('intercom').trackEvent(message);
      this.get('intercom').update();
    })
  });
}

export default {
  name: 'router',
  initialize: initialize
};
