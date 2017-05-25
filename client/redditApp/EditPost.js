angular.module('app')
  .controller('EditPost', EditPost)
  function EditPost($http, $state) {
    vm = this

    vm.$onInit = function() {
      console.log('init ', $state.params.post);
      vm.commentForm = false
      vm.post = $state.params.post

    vm.updatePost = function(post) {

      $http.patch("http://localhost:8090/api/posts/" + vm.post.id, post)
      .then(function(response) {
        $state.go('home')
        console.log("response", response);
        console.log('success');
      }).catch(function(error) {
        console.log("catch hit", error);
      })
    }


  }
}
