var express = require('express');
var router = express.Router();
var models = require('../models');
const users = require('../models/users');

router.get('/blackShirt', function (req, res, next){
    models.stock.findOne({
        where: {
          ItemType: "BlackShirt"
        }
      })
      .then(item => {
          console.log(item)
          res.send(item)
      })
})

router.get('/whiteShirt', function (req, res, next){
    models.stock.findOne({
        where: {
          ItemType: "WhiteShirt"
        }
      })
      .then(item => {
          console.log(item)
          res.send(item)
      })
})

router.get('/products', function(req, res, next) {
  models.product
    .findAll({})
    .then(productsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(productsFound));
    });
});

router.get('/product/:id', function(req, res, next) {
  models.product
    .findOne({
      where: {
        id: parseInt(req.params.id)
      }
    })
    .then(productsFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(productsFound));
    })
})

router.post('/addProduct', function (req, res, next){
    models.product
      .findOrCreate({
        where: {
          title: req.body.title
        },
        defaults: {
          price: req.body.price,
          imageUrl: req.body.imageUrl,
          description: req.body.description,
          quantity: req.body.quantity
        }
      })
      .spread(function (result, created) {
        if (created) {
          res.send('Product created successfully');
        } else {
          res.send('This product already exists');
        }
      });
})

router.delete("/products", function (req, res, next) {
  models.product
    .destroy({
      where: { title: req.body.title }
    })
    .then(result => res.send("item deleted"))
    .catch(err => { 
      res.status(400); 
      res.send("There was a problem deleting the item. Please make sure you are specifying the correct title."); 
    }
);
});

module.exports = router;