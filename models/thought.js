const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

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
  reactions: [reactionSchema],
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// reactionCount virtual
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  });

const Thought = model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);


module.exports = Thought;