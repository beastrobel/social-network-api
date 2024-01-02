const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: { 
    type: String, 
    required: 'text is required', 
    max: 280,   
  },
  createdAt: { 
    type: Date, 
    default: Date.now, 
  },
  username: {
    type: String, 
    required: 'username is required',
  },  
  reactions: [],
});

const Thought = mongoose.model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);

Thought
  .create({
    thoughtText: 'That was amazing!',
    createdAt: Date.now,
    username: John Doe,
    friends: [],
  })
  .then(result => console.log('Created new document', result))
  .catch(err => handleError(err));

module.exports = Thought;