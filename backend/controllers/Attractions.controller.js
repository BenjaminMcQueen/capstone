const Attraction = require('../models/Attractions.model');

module.exports.post = async (req, res) =>{
    const attraction = await Attraction.create(req.body);
    res.json(attraction);
    console.log("Attraction added:", attraction);
}