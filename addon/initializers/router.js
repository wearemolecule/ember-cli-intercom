import Ember from 'ember';
import env from 'frontend/config/environment';

const intercomConfig = env['ember-cli-intercom'];

export function initialize(application) {
  if (intercomConfig.logTransitions === true) {
    logTransitions(application);
  }
}

export default {
  name: 'intercom-router',
  initialize
};

function logTransitions(application) {
  let messagePrefix = intercomConfig.logTransitionsPrefix || 'went to';

  Ember.Router.reopen({
    intercom: Ember.inject.service(),

    trackTransition: Ember.on('didTransition', function() {
      let appController    = application.__container__.lookup('controller:application');
      let currentRouteName = appController.get('currentRouteName');
      let url              = this.get('url');
      let message          = `${messagePrefix} ${currentRouteName}`;

      this.get('intercom').trackEvent(message, {url});
      this.get('intercom').update();
    })
  });
}
