const api = require('../src/api/api');

function get_api(app) {
  app.get('/api', (req, res) => {
    res.type('json');
    res.status(200);
    res.json([{ data: 'data' }]);
  });

  app.post('/api/adduser', (req, res) => {
    res.type('json');
    res.status(200);
    api.User.setUser(
      req.body.user,
      function(user) {
        res.json(user);
      },
      function(error) {
        res.json(error);
      }
    );
  });

  app.get('/api/user/:username', function(req, res) {
    console.log('>>> Getting user from database');
    api.User.getUser({ username: req.params.username }, function(users) {
      res.type('json');
      res.status(200);
      res.json(users);
    });
  });

  app.post('/api/setproduct', function(req, res) {
    res.type('json');
    res.status(200);
    api.Product.setProduct(
      req.body.product,
      function(product) {
        res.json(product);
      },
      function(error) {
        res.json(error);
      }
    );
  });

  app.get('/api/product/:name_id', function(req, res) {
    res.type('json');
    res.status(200);
    api.Product.getProducts({ nameId: req.params.name_id }, function(products) {
      res.json(products[0]);
    });
  });

  app.get('/api/products', function(req, res) {
    res.type('json');
    res.status(200);
    api.Product.getProducts({}, function(products) {
      res.json(products);
    });
  });
}

module.exports = {
  api: app => get_api(app)
};
