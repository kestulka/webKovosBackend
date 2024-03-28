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
        res.status(500).json({message: error.message})
    }
};



const getLogotype = async(req, res) => {

    try {

     const {job_id} = req.params;

     const response = await fetch(`http://172.16.50.58:5000/api/image/status/${job_id}`, {
        method: "GET"
     })

     const data = await response.json()

     const isActive = data.job_running;
     const urls = data.job_download_url;

     res.status(200).json(isActive)
     res.status(200).json(urls)
        
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const deleteLogotype = async(req, res) => {

    try {
        const { id } = req.params
        const deletedLogotype = await Logotype.findByIdAndDelete(id)
        if(!deletedLogotype){
            res.status(404).json({ message: "logotype not found"})
            return;
        }
        res.json({message: "Logotype deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
  
}


module.exports = {getLogotypes, generateLogotype, getLogotype, deleteLogotype}