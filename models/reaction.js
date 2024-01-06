const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
   reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
   },
   reactionBody: {
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
}, 
   {
    toJSON: {
      getters: true,
    },
    id: false,
  }
 );


 module.exports = reactionSchema;