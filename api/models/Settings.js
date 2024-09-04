const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  emailNotifications: {
    type: Boolean,
    default: true,
  },
  smsNotifications: {
    type: Boolean,
    default: true,
  },
  dailyDigest: {
    type: Boolean,
    default: true,
  },
  // Add more settings as needed
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
