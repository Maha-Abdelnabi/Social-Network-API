const express = require("express");
const db = require("./config/connection");
//const routes = require("./routes");
const User = require("./models/User")


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(require("./routes"));

//examples for routes to check activity
app.get("/", (req, res) => {
   res.send("Hello World!");
})

app.post('/user',(req,res)=>{
 try{
const user = User.create(req.body)
res.status(200).json(user);
 }catch{
   console.log(error.message);
   res.status(500).json({message: error.message})
 }
})


db.once("open", () => {
 app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
 });
});