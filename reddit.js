angular.module("app")
  .controller('reddit', reddit)
   function reddit(){

      vm = this

      vm.$onInit = function() {
        vm.postForm = false
        vm.commentForm = false
        vm.posts = [{
            title: 'fozz',
            author: 'Nick',
            img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
            desc: 'DOPE',
            votes: 10,
            date: Date(),
            comments: [
              {text: 'Dope'}
            ]
          },
          {
            title: 'fozz',
            author: 'Nick',
            img: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
            desc: 'DOPE',
            votes: 100,
            date: Date(),
            comments: [
              {text: 'Nice'}
            ]

          }
        ]
        // vm.comments = []
      }
      vm.addPost = function() {
        console.log('clicked');
        vm.post.votes = 0
        vm.post.date = Date()
        vm.post.comments = []
        vm.posts.push(vm.post)
        delete vm.post
      }

      vm.showAddPost = function() {
        console.log(vm.postForm);
        if(!vm.postForm) {
          vm.postForm = true
        } else {
          vm.postForm = false
        }
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
