const express = require('express');
const router = express.Router();
const HealthRecord = require('../models/HealthRecord'); // Adjust path as necessary

// Create a new health record
router.post('/', async (req, res) => {
  try {
    const record = new HealthRecord(req.body);
    await record.save();
    res.status(201).send(record);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Retrieve all health records
router.get('/', async (req, res) => {
  try {
    const records = await HealthRecord.find();
    res.status(200).send(records);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Retrieve a specific health record by ID
router.get('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findById(req.params.id);
    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a health record
router.put('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a health record
router.delete('/:id', async (req, res) => {
  try {
    const record = await HealthRecord.findByIdAndDelete(req.params.id);
    if (!record) return res.status(404).send();
    res.status(200).send(record);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
