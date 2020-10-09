var express = require('express')
var router = express.Router()
var {
        createFriendController, 
        loginFriendByEmailController,
        getFriendByIdController,
        getFriendsController,
        updateFriendController,
        deleteFriendController
} = require('./friends.controller')



router.get("/", getFriendsController)
router.post("/", createFriendController)
router.get("/:id", getFriendByIdController)
router.post("/login", loginFriendByEmailController)
router.patch("/",updateFriendController)
router.delete("/", deleteFriendController)

module.exports = router
