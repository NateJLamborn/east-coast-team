var express = require('express');
var router = express.Router();
var models = require('../models');
const users = require('../models/users');

router.get('/cart', function(req, res, next) {
    models.cart
      .findAll({})
      .then(itemsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(itemsFound));
    });
});

router.post('/addtocart', function (req, res, next){
  models.cart
    .findOrCreate({
      where: {
        title: req.body.title
      },
      defaults: {
        id: req.body.id,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        quantity: req.body.quantity
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.send('Product added to cart');
      } else {
        res.send('Error adding to cart');
      }
    });
})

router.delete("/removefromcart", function (req, res, next) {
  models.cart
    .destroy({
      where: { title: req.body.title }
    })
    .then(result => res.send("item removed from cart"))
    .catch(err => { 
      res.status(400); 
      res.send("There was a problem removing the item. Please make sure you are specifying the correct title."); 
    }
);
});


module.exports = router;