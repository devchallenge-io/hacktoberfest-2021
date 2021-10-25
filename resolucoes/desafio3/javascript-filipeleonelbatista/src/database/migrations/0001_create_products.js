exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("price").notNullable();
    table.string("skuId").notNullable();
    table.string("seller").notNullable();
    table.string("thumbnailHd").notNullable();
    table.boolean("inStock").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
