// Define Mongoose
const mongoose = require("mongoose");

//user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return v.length > 3;
      },
      message: "Username must be more than 3 characters",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    ],

    validate: {
      validator: function (v) {
        return v.length > 3;
      },
      message: "Email must be more than 3 characters",
    },
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thoughts",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Friends",
    },
  ],
});

//after creating the schema we use it to create mongoose model
// Using mongoose.model() to compile a model based on the schema
// 'Item' is the name of the model
// grocerySchema is the name of the schema we are using to create a new instance of the model
const User = mongoose.model('User', userSchema);
//create user document
const user = new User({
    name: "Ameer",
    email: "ameer@gmail.com",
    username: "ameer",
    password: "password",
    thoughts: [
        {
            text: "I love to eat rice",
            date: new Date(),
            
                }]
  
})
user.save();
module.exports = User;