const db = require("../database/connection");

module.exports = {
  async index(req, res) {
    const result = await db("products").select("*");
    res.json(result);
  },
  async save(req, res) {
    const { name, price, skuId, seller, thumbnailHd, inStock } = req.body;

    const trx = await db.transaction();

    const data = {
      name,
      price,
      skuId,
      seller,
      thumbnailHd,
      inStock,
    };

    try {
      await trx("products").insert(data);

      await trx.commit();

      return res.status(201).send({
        success: true,
        created: data,
      });
    } catch (err) {
      await trx.rollback();

      const errorData = {
        success: false,
        parameters: data,
        error_msg: err,
      };

      return res.status(400).json(errorData);
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      const result = await db("products").where("products.id", "=", id).del();

      return res.status(200).json({
        success: true,
        result,
      });
    } catch (err) {
      const errorData = {
        success: false,
        error_msg: err,
      };

      return res.status(400).json(errorData);
    }
  },
  async update(req, res) {
    const { id } = req.params;

    const { name, price, skuId, seller, thumbnailHd, inStock } = req.body;

    const trx = await db.transaction();

    const data = {
      name,
      price,
      skuId,
      seller,
      thumbnailHd,
      inStock,
    };

    try {
      await trx("products").where("products.id", "=", id).update(data);

      await trx.commit();

      return res.status(201).send({
        success: true,
        created: data,
      });
    } catch (err) {
      await trx.rollback();

      const errorData = {
        success: false,
        parameters: data,
        error_msg: err,
      };

      return res.status(400).json(errorData);
    }
  },
};
