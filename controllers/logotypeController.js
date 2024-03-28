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
            redirect: "follow" // REIKIA NUKREIPTI I /API/V1/LIST
        });

        const generateNewLogotype = await response.json();
        res.status(201).json(generateNewLogotype)
    } catch(error) {
        res.status(500).json({error: "Server error"})
    }
};

const addFavorite = async(req, res) => {
    
}


module.exports = {getLogotypes, generateLogotype}