const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    unique: true, 
    required: 'username is required', 
    trimmed: true 
  },
  email: { 
    type: String, 
    required: 'email is required', 
    unique: true, 
    trimmed: true,
    //Referenced StackOverflow ramon22 for Mongoose validate
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
  },
  thoughts: [],
  friends: [],
});

const User = mongoose.model('User', userSchema);

const handleError = (err) => console.error(err);

User
  .create({
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    toughts: [],
    friends: [],
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

module.exports = User;
