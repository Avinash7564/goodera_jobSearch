const { Router } = require("express");
const Job = require("../models/job.model");
const router = Router();

router.get("", async (req, res) => {
  try {
    const data = await Job.find().lean().exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const data = await Job.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
