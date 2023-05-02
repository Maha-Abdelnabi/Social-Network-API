const router = require("express").Router();
const User  = require("../../models/User");

 // GET /api/users
 router.get("/", async(req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json(users);
        }catch(err){
            res.status(500).json(err);
  }
                });

 // GET /api/users/:id
 router.get("/:id", async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        }catch(err){
            res.status(500).json(err);
            }
            });


 //post
 router.post("/", (req, res) => {
   try {
     const user = User.create(req.body);
     res.status(200).json(user);
   } catch {
     console.log(error.message);
     res.status(500).json({ message: error.message });
   }
 });               

module.exports = router;