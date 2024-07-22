const express = require('express');
const multer = require('multer');
const Application = require('../models/Application');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('resume'), async(req, res) => {
    const { job, candidate } = req.body;
    const resume = req.file.path;
    const application = new Application({ job, candidate, resume });
    await application.save();
    res.status(201).send('Application submitted');
});

router.get('/', async(req, res) => {
    const applications = await Application.find().populate('job').populate('candidate');
    res.json(applications);
});

module.exports = router;