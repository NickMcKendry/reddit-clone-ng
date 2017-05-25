
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {
          id: 100,
          title: 'DOPE',
          author: 'Nick',
          image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
          votes: 100,
          description: 'Dope fozz',
          date: 2015
        },
        {
          id: 200,
          title: 'DOPE2',
          author: 'Nick',
          image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
          votes: 10,
          description: 'Dope fozz',
          date: 2015



        },
        {
          id: 300,
          title: 'DOPE 3',
          author: 'Nick',
          image: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stancenation.com%2Fwp-content%2Fuploads%2F2014%2F05%2Ffull.jpg&f=1',
          votes: 1,
          description: 'Dope fozz',
          date: 2015



        }
      ]);
    });
};
