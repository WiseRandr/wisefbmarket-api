const app = require('express')();
const routes = require('./api_routes.js');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8000);

// Allow Cross Origin for api endpoints
app.use(require('cors')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Api routing
routes.api(app);

// 404 not found endpoint
app.use((req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - page not found!');
});

// 500 error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - error');
});

// Running server
app.listen(app.get('port'), function() {
  console.log(
    `Server runnning on port ${app.get('port')}. Press Ctrl+C to exit.`
  );
});
