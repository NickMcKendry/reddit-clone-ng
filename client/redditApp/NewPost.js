angular.module('app')
  .controller('NewPost', NewPost)
  function NewPost($http, $state) {

    vm = this


    vm.addPost = function() {
      vm.post.date = '2015'
      vm.post.votes = 0
      $http.post("http://localhost:8090/api/posts", vm.post)
      .then(function(response) {
        console.log('post then hit');
        $state.go('home')
      }).catch(function(err) {
        console.log('catch hit', err);
      })
    }
  }
