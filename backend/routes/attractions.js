const router = require('express').Router();
const attractionController = require('../controllers/Attractions.controller');


// router.get('/attraction', )
router.post('/attraction', attractionController.post)
// router.delete('/attraction', )

module.exports = router;