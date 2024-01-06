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
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
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

// reactionCount virtual
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions}`;
  })
  // Setter to set the first and last name
  .set(function (v) {
    const reactions = v.length;
    this.set({ reactions });
  });

const Thought = model('Thought', thoughtSchema);

const handleError = (err) => console.error(err);


module.exports = Thought;