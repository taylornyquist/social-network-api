const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
    .route('/')
    .get(getAllThoughts)

//  /api/thoughts/:userId
// still not sure about this one
// should it the userId be in the params or the body???
router
    .route('/:userId')
    .post(createThought)


//  /api/thoughts/<thoughtId>
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

//  /api/thoughts/<userid>/<thoughtId>
// maybe use this???
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought)

// not sure about this section...
//  /api/thoughts/:thoughtId/reactions/
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

//  /api/thoughts/:thoughtId/reactions/:reactionId

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;