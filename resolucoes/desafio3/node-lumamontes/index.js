const express = require("express");
const { Router } = require('express');
const routes = Router();
const app = express();
const knex = require('./database/knex');

routes.get('/bonestore/product', async (request, response) => {
    try{
        let bones = await knex.from('products');
        return response.json(bones);
    }catch(error){
        console.log(error)
    }
} )
routes.post('/bonestore/product', async (request, response) =>{
    try {
        const {
            name,
            price,
            skuId,
            seller,
            thumbnailHd,
            inStock,
        } = request.body;
        await knex('products').insert({
            name,
            price,
            skuId,
            seller,
            thumbnailHd,
            inStock,
        });
        return response.status(201).send();
    } catch (error) {
        console.log(error);
    }
} )

app.use(express.json());
app.use(routes);

app.listen(3333);

