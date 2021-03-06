import Ember from 'ember';

export default Ember.Service.extend({
  boot(params) {
    Intercom('boot', params);
  },

  update(params) {
    Intercom('update', params);
  },

  trackEvent(eventMessage, metadata) {
    Intercom('trackEvent', eventMessage, metadata);
  },
});
