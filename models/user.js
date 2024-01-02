const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
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
   // validate: [validateEmail, 'Please fill a valid email address'],
   // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
}
);

const User = model('User', userSchema);

module.exports = User;
