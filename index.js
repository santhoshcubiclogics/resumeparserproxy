const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 8000;

app.use(bodyParser.json({limit:'50mb'}));

const url = 'http://149.137.246.7:47910/process_resume';

app.post('/resume_parser', async (req, res) => {
    try {
        const { resume_keys, resume_text } = req.body;
        const response = await axios.post(url, {
            resume_keys,
            resume_text
        });
        res.json({ data: response.data });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
