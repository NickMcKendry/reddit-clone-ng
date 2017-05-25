
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comment', (table) => {
    table.increments()
    table.text('text')
    table.integer('post_id').references('post.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comment')
};
