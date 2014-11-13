meteor-helpers
==============

Meteor helpers that should come as default

```
Template.registerHelper 'Users', ->
	Meteor.users

Template.registerHelper 'User', ->
	Meteor.user()

Template.registerHelper 'getUser', (_id) ->
  if Meteor.users
    Meteor.users.findOne _id

Template.registerHelper 'getDoc', (_id, collection) ->
  if window[collection].findOne _id
    window[collection].findOne _id
    
Template.registerHelper 'active', (route)->
  if route == Router.current().route.name
    'active'


Template.registerHelper 'parseLinks', (inputText) ->
  # http://, https://, ftp://
  urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/g
  
  # www. sans http:// or https://
  pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/g
  
  # Email addresses
  emailAddressPattern = /\w+@[a-zA-Z_]+?(?:\.[a-zA-Z]{2,6})+/g
  inputText.replace(urlPattern, "<a target='_blank' href=\"$&\">$&</a>").replace(pseudoUrlPattern, "$1<a target='_blank' href=\"http://$2\">$2</a>").replace emailAddressPattern, "<a target='_blank' href=\"mailto:$&\">$&</a>"

```