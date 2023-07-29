const express = require("express");
const router = express.Router();
const View = require("../models/Viewmodel");

router.get("/", async (req, res) => {
  try {
    console.log("GET request received at /view");
    const viewList = await View.find();
    console.log("Fetched viewList:", viewList);
    res.status(200).json(viewList);
  } catch (err) {
    console.error("Error fetching viewList:", err);
    res.status(500).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  console.log("POST request received at /view");
  console.log("Request body:", req.body);

  const view = new View({
    tname: req.body.tname,
    tdescription: req.body.tdescription,
    price: req.body.price,
    tnumber: req.body.tnumber,
  });

  try {
    const savedView = await view.save();
    console.log("Saved view:", savedView);
    res.json(savedView);
  } catch (err) {
    console.error("Error saving view:", err);
    res.json({ message: err });
  }
});

router.post("/search", async (req, res) => {
  console.log("POST request received at /view/search");
  console.log("Request body:", req.body);

  try {
    const searchView = await View.find({ tnumber: req.body.tnumber });
    console.log("Search result:", searchView);
    res.json(searchView);
  } catch (err) {
    console.error("Error searching view:", err);
    res.json({ message: err });
  }
});

router.post("/delete", async (req, res) => {
  console.log("POST request received at /view/delete");
  console.log("Request body:", req.body);

  try {
    const deleteView = await User.deleteOne({ tnumber: req.body.tnumber });
    console.log("Delete result:", deleteView);
    res.json(deleteView);
  } catch (err) {
    console.error("Error deleting view:", err);
    res.json({ message: err });
  }
});

router.post("/update", async (req, res) => {
  console.log("POST request received at /view/update");
  console.log("Request body:", req.body);

  try {
    const updateView = await User.updateOne(
      { tnumber: req.body.tnumber },
      {
        $set: {
          tname: req.body.tname,
          price: req.body.price,
          tdescription: req.body.tdescription,
          tnumber: req.body.tnumber,
        },
      }
    );
    console.log("Update result:", updateView);
    res.json(updateView);
  } catch (err) {
    console.error("Error updating view:", err);
    res.json({ message: err });
  }
});

module.exports = router;