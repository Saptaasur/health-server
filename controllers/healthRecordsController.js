const HealthRecord = require('../models/HealthRecord');

exports.getAllRecords = async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching records.' });
  }
};

exports.createRecord = async (req, res) => {
  const { date, temperature, bloodPressure, heartRate } = req.body;
  try {
    const newRecord = new HealthRecord({ date, temperature, bloodPressure, heartRate });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({ message: 'Error creating record.' });
  }
};

// Add more functions for getting, updating, and deleting a specific record
