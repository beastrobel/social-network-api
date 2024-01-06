const { Schema, Types } = require('mongoose');

const friendSchema = new Schema({
   friendId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
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


 module.exports = friendSchema;