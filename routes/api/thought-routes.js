const router = require("express").Router();
const Thought = require("../../models/Thought");

// GET /api/thoughts
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/thoughts/:id
router.get("/:id", async (req, res) => {
  try {
    const thoughts = await Thought.findById(req.params.id);
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/thoughts
router.post("/", (req, res) => {
  try {
    const thought = Thought.create(req.body);
    res.status(200).json(thought);
  } catch {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/thoughts/:id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const thought = await Thought.findByIdAndUpdate(id, req.body);
    if (!thought) {
      return res.status(404).json({ message: "thought not found" });
      //can't find any thought in db
    }
    const updatedthought = await Thought.findById(id);
    res.status(200).json(updatedthought);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE /api/thoughts/:id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const thought = await Thought.findByIdAndDelete(id);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    res.status(200).json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
});
