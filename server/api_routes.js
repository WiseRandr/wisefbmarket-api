function get_api(app) {
  app.get('/api', (req, res) => {
    res.type('json');
    res.status(200);
    res.json([{ data: 'data' }]);
  });
}

module.exports = {
  api: app => get_api(app)
};
