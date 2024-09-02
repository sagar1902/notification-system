// controllers/notificationController.js
const Notification = require('../models/Notification');

exports.sendNotification = async (req, res) => {
  try {
    const { message, recipient, type } = req.body;

    const notification = new Notification({ message, recipient, type });
    await notification.save();

    res.status(201).json({ success: true, data: notification });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};
