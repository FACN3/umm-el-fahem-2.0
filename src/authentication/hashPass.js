const bcrypt = require('bcryptjs');
const add_user = require('../../database/queries/add_user');

const hashPassword = data => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      console.log(err);
    } else {
      bcrypt.hash(data.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
        } else {
          data.password = hash;
          add_user(data);
        }
      });
    }
  });
};

module.exports = hashPassword;
