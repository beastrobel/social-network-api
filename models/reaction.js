const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
   reactionId,
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
 });

 const Reaction = model('Reaction', reactionSchema);

 module.exports = Reaction;