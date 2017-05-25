angular.module("app")


  .controller('reddit', reddit)
   function reddit($http){


      vm = this

      vm.$onInit = function() {
        console.log('init ');
        vm.commentForm = false
        $http.get("http://localhost:8082/api/posts")
        .then(function(response, post) {

          console.log('then hit');
          console.log(response);
          vm.posts = response.data
          vm.posts.id = response.data.id
        })

        vm.deletePost = function(e, post) {
          e.preventDefault()
          let postId = vm.posts[vm.posts.indexOf(post)].id
          $http.delete("http://localhost:8082/api/posts/" + postId)
          .then(function(response) {
            vm.posts.splice(vm.posts.indexOf(post), 1)
          })
        }
      //   vm.posts = [{
      //       title: 'fozz',
      //       author: 'Nick',
      //       img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
      //       desc: 'DOPE',
      //       votes: 10,
      //       date: Date(),
      //       comments: [
      //         {text: 'Dope'}
      //       ]
      //     },
      //     {
      //       title: 'fozz',
      //       author: 'Nick',
      //       img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
      //       desc: 'DOPE',
      //       votes: 100,
      //       date: Date(),
      //       comments: [
      //         {text: 'Nice'}
      //       ]
      //
      //     }
      //   ]
      //   // vm.comments = []
       }




      vm.showAddComment = function(post) {
        console.log(vm.postForm);
        if(!vm.posts[vm.posts.indexOf(post)].showComment) {
          vm.posts[vm.posts.indexOf(post)].showComment = true
        } else {
          vm.posts[vm.posts.indexOf(post)].showComment = false
        }
      }

      vm.upVote = function(e, post) {
        e.preventDefault()
        post.votes++
      }
      vm.downVote = function(e, post) {
        e.preventDefault()
        if (post.votes >= 1) {
          post.votes--
        }
      }
      vm.addComment = function(post, comment) {
        console.log(comment)
        vm.posts[vm.posts.indexOf(post)].comments.push({text: comment})
      }

    }
