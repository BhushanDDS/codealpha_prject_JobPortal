const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

router.post('/', async(req, res) => {
    const { name, description, postedBy } = req.body;
    const job = new Job({ name, description, postedBy });
    await job.save();
    res.status(201).send('Job posted');
});

router.get('/', async(req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

module.exports = router;