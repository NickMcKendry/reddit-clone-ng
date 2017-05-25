angular.module('app', ['ui.router'])
  .component('home', {
    controller : 'reddit',
    templateUrl : '/reddit.template.html'
  })
  .component('post', {
    controller: 'NewPost',
    templateUrl: '../newPost/newpost.template.html'
  })
  .component('edit', {
    controller: 'EditPost',
    templateUrl: '../editPost/editpost.template.html'
  })
