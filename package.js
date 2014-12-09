Package.describe({
  summary: "Meteor helpers that should come as standard",
  version: "0.0.4",
  git: "Users, User, timeSince, prettyDate and more"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use(['coffeescript','templating'],'client');
  api.addFiles('lib/client/helpers.coffee')
});
