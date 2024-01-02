const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
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

const Thought = model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);


module.exports = Thought;