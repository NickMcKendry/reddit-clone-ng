
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {
          id: 100,
          text: 'dope shit',
          post_id: 100



        },
        {
          id: 200,
          text: 'dope shit',
          post_id: 100




        },
        {
          id: 300,
          text: 'dope shit',
          post_id: 200




        }
      ]);
    });
};
