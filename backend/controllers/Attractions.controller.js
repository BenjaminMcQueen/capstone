const Attraction = require('../models/Attractions.model');
const ErrorHandler = require('./errorHandler')

module.exports.post = async (req, res) =>{
    const attraction = await Attraction.create(req.body);
    res.json(attraction);
    console.log("Attraction added:", attraction);
}

module.exports.get = async (req, res) => {

}

module.exports.delete = async (req, res) => {
    Attraction.findByIdAndDelete(req.params.id)
    .then( () => res.send('Attraction deleted.'))
    .catch(err => ErrorHandler.diagnoseAndRespond(err, res));
}