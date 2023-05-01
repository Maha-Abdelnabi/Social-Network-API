const mongoose = require('mongoose');

//thought schema
var thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  createdAt: { type: Date, 
    default: Date.now() },
    
  username: {
    type: String,
    required: true,
  },
});

    const Thought = mongoose.model("Thought", thoughtSchema);

    const thought = new Thought({
        thoughtText: "I am a thought",
        thoughtDate: Date.now(),
        username: "Ameer",
    
        });

   
module.exports = Thought;
