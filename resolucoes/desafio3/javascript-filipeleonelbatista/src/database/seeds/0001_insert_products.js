exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("products").insert([
        {
          "name":"Boné Preto",
          "price":7990,
          "skuId":"78993000",
          "seller":"Lucas Xavier",
          "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
          "inStock" : true
         },
         {
          "name":"Boné Marrom",
          "price":7990,
          "skuId":"78993001",
          "seller":"Marcos Bonés",
          "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
          "inStock" : false
         },
         {
          "name":"Boné Vermelho",
          "price":7990,
          "skuId":"78993002",
          "seller":"Lorena",
          "thumbnailHd":"https://dummyimage.com/600x400/000/fff",
          "inStock" : true
         }
      ]);
    });
};
