var router = require('express').Router
const { checkToken } = require("../../auth/token_validation");

var {
        createFriendController, 
        loginFriendByEmailController,
        getFriendByIdController,
        getFriendsController,
        updateFriendController,
        deleteFriendController,
        welcome
} = require('./friends.controller')


router.get("/welcome", welcome)
router.get("/", checkToken, getFriendsController)
router.post("/", checkToken, createFriendController)
router.get("/:id", checkToken, getFriendByIdController)
router.post("/login", loginFriendByEmailController)
router.patch("/",checkToken, updateFriendController)
router.delete("/", checkToken, deleteFriendController)

module.exports = router
