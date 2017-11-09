var express = require('express');
var router = express.Router();
var Item =require('./users.js')

/* GET home page. */
router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get('/', function (req, res) {
  Item.find(function (err, items) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(items);
    }
  });
});
router.post('/create', function (req, res) {
  var item = new Item(req.body);
  item.save()
    .then(item => {
      res.status(200).json({ 'item': 'Item added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});


router.get('/edit/:id', function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item) {
    res.json(item);
  });
});

router.post('/update/:id', function (req, res) {
  Item.findById(req.params.id, function (err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      item.name = req.body.name;
      item.price = req.body.price;

      item.save().then(item => {
        res.json('Update complete');
      })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

router.get('/delete/:id', function (req, res) {
  Item.findByIdAndRemove({ _id: req.params.id }, function (err, item) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = router;
