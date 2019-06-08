const api = require('../src/api/api');

function get_api(app) {
  app.get('/api', (req, res) => {
    res.type('json');
    res.status(200);
    res.json([{ data: 'data' }]);
  });

  app.get('/api/adduser', (req, res) => {
    api.User.setUser(
      { name: 'Kathia', username: 'kathia', password: 'kathia', roleId: 5 },
      function(user) {
        res.type('json');
        res.status(200);
        res.json(user);
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
}

module.exports = {
  api: app => get_api(app)
};
