const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addNewFriendById,
    deleteFriendById
} = require('../../controllers/user-controller');

// Setup GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Setup GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Setup POST and DELETE at /api/users/:id/friends/:friendId
// not sure about this section...
router
    .route('/:id/friends/:friendId')
    .post(addNewFriendById)
    .delete(deleteFriendById)

module.exports = router;