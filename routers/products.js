const express = require('express');
const products = express.Router();

products.route("/create").post( async (req, res) => {
    const {name, stock, price} = req.body
    let data = {
        name, price, stock
    }
});