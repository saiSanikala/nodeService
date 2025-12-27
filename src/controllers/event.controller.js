const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    const saved = await event.save();

    res.status(201).json({
      success: true,
      id: saved._id
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};
