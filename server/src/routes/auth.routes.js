import express from "express";

const router = express.Router();

router.post("/register", async (req, res) => {
  res.json({ message: "Register endpoint working" });
});

export default router;
