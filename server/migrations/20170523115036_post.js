
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', (table) => {
    table.increments()
    table.string('title')
    table.string('author')
    table.string('image')
    table.integer('votes')
    table.text('description')
    table.text('date')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post')
};
