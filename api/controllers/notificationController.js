// controllers/notificationController.js
const Notification = require("../models/Notification");

exports.sendNotification = async (req, res) => {
  const { message, modes } = req.body;

  if (!message || !modes || modes.length === 0) {
    return res
      .status(400)
      .json({ success: false, error: "Message and modes are required" });
  }

  try {
    // Send notifications based on the modes array
    for (let mode of modes) {
      switch (mode) {
        case "email":
          await sendEmail(req.user.email, message);
          break;
        case "sms":
          await sendSMS(req.user.phoneNumber, message); // Assuming `phoneNumber` is part of the user model
          break;
        default:
          return res
            .status(400)
            .json({ success: false, error: `Unsupported mode: ${mode}` });
      }
    }

    res.status(200).json({ success: true, data: "Notification sent" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Failed to send notification" });
  }
};
