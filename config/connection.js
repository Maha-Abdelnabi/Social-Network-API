const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB
mongoose
  .connect(
    "mongodb+srv://maha-omar:password-Mongo@devapi.b0zoipm.mongodb.net/SocialNetwork",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error, "could not connect to MongoDB");
  });

// Export connection
module.exports = mongoose.connection;
