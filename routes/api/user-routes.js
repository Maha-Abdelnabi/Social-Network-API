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


// POST /api/users
 router.post("/", (req, res) => {
   try {
     const user = User.create(req.body);
     res.status(200).json(user);
   } catch {
     console.log(error.message);
     res.status(500).json({ message: error.message });
   }
 });               

 // PUT /api/users/:id
 router.put("/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if(!user){
           return res.status(404).json({ message: "User not found" });
           //can't find any user in db
           }
           const updatedUser = await User.findById(id);
           res.status(200).json(updatedUser);
        }
catch(err){
    res.status(500).json(err);
    }
    });

 // DELETE /api/users/:id
 router.delete("/:id", async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
        
     } catch(err){
    res.status(500).json(err);
    }
    });

   // POST /api/users/:userID/friends/:friendID
   router.post("/:userID/friends/:friendID", async(req, res) => {
    try{
    const user = await User.findByIdAndUpdate({_id: req.params.id}, {$push: {friends: req.params.friendId}});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }

            const friend = await User.findByIdAndUpdate({_id: req.params.friendId}, {$push: {friends: req.params.friendId}});
            if (!friend) {
                return res.status(400).json({ message: 'No friend found with this ID!!!', err });
            }
            res.json({ message: 'Added a new friend :) !!!'});
        } catch (err) {
            res.status(400).json({ message: 'Error adding friend!!!', err });
        }
    })

 // DELETE /api/users/:userID/friends/:friendID
 router.delete("/:userID/friends/:friendID", async(req, res) => {
  try{
     const user = await User.findByIdAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}});
            if (!user) {
                return res.status(400).json({ message: 'No user found with this ID!!!'});
            }

            const friend = await User.findByIdAndUpdate({_id: req.params.id}, {$pull: {friends: req.params.friendId}});
            if (!friend) {
                return res.json({ message: 'No friend found with this ID!!!'});
            }
            res.json({ message: 'Lost a friend :( !!!'});
        } catch (err) {
            res.status(400).json({ message: 'Error removing friend!!!', err });
        }
    })








module.exports = router;