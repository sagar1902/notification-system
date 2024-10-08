// routes/notifications.js
const express = require("express");
const router = express.Router();
const notificationRoutes = require("./routes/notifications");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middlewares/authMiddleware");

// Basic route for testing
router.get("/", (req, res) => {
  res.send("Notification System is running!");
});

router.use("/auth", authRoutes);

router.use("/notifications", authMiddleware, notificationRoutes);

module.exports = router;
