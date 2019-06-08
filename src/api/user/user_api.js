const Model = require('../../../models');

const prepareUser = user => {
  console.log('>>> Preparing User ...');
  if (typeof user.isActive === 'undefined') user.isActive = true;

  console.log('>>> User Validated successfully.');
  return user;
};

const setUser = (user, cb, errorCb) => {
  console.log('***** Setting up new user *****');
  getUser({ username: user.username }, catchUser => {
    if (catchUser === null) {
      console.log('>>> Inserting new User: ');
      user = prepareUser(user);
      new Model.User(user).save().then(newuser => {
        console.log('>>> New User added successfully.');
        console.log('***** User set successfully *****');
        cb(newuser);
      });
    } else {
      const user_exist_mess = `Error::: error while inserting new user => User ${
        user.name
      } already exist`;
      console.log(user_exist_mess);
      errorCb({ message: user_exist_mess });
    }
  });
};

const getUser = (userCriteria, cb) => {
  console.log('***** Getting user *****');
  Model.User.findOne(userCriteria)
    .then(user => {
      if (user) {
        console.log('***** User founded *****');
        cb(user);
      } else {
        console.log('***** User not founded *****');
        cb(null);
      }
    })
    .catch(() => {
      console.log('Error::: error while getting user');
    });
};

module.exports = {
  getUser,
  setUser
};
