// Define Mongoose
const mongoose = require("mongoose");

//user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
   
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    ],

   
  },
  
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
  toJSON:{
    virtuals: true,
  },
  id: false,
}
)
// get total count of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
//after creating the schema we use it to create mongoose model
// Using mongoose.model() to compile a model based on the schema

const User = mongoose.model('User', userSchema);


module.exports = User;