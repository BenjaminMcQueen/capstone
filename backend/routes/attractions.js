const router = require('express').Router();
const attractionController = require('../controllers/Attractions.controller');


// router.get('/attraction', )
router.route('/').post(attractionController.post)
router.route('/:id').delete(attractionController.delete)

module.exports = router;