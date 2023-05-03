const mongoose = require('mongoose');

//thought schema
var thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 200,
    },
    createdAt: { type: Date, default: Date.now() },

    username: {
      type: String,
      required: true,
    },
   
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
// get total count of friends
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
    const Thought = mongoose.model("Thought", thoughtSchema);

   

   
module.exports = Thought;
