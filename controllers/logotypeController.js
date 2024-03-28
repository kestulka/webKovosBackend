const Logotype = require("../models/Logotype")

const API_TOKEN = "10574af0b2fe4401bbeab87cee142707"

const getLogotypes = async (req, res) => {
    try {
        const logotypes = await Logotype.find()
        res.status(201).json({ success: true, data: logotypes })
    } catch (error) {
        res.status(400).json({ success: false, error: error.message })
    }
}
  

const generateLogotype = async(req, res) => {
    try {

        const response = await fetch("http://172.16.50.58:5000/api/image/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
            body: JSON.stringify({
                "prompt": "string"
            }),
            redirect: "follow"
        });

        const generateNewLogotype = await response.json();

        const logotype = new Logotype({
            code: generateNewLogotype.code,
            job_id: generateNewLogotype.job_id,
            message: generateNewLogotype.message
        })
        await logotype.save()

        res.status(201).json(generateNewLogotype)
    } catch(error) {
        res.status(500).json({error: "Server error"})
    }
};

// Route: /api/image/status/{job_id}

// Method: GET

// Description: This API route allows to check the status of a specific image generation job identified by its job_id. Additionally, if the job was completed, it provides download links for the generated images.

// Request parameters:

// job_id (string, required): The unique identifier for the image generation job.

const getLogotype = async(req, res) => {

    try {

        const response = await fetch("http://172.16.50.58:5000/api/image/status/{job_id}", {
            method: "GET",
           
        })
    }
}



module.exports = {getLogotypes, generateLogotype}