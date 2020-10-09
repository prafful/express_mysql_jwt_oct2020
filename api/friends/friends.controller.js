var {
        createFriend, 
        getFriendByEmail,
        getFriendById,
        getFriends,
        updateFriend,
        deleteFriend
    } = require('./friends.services')

module.exports = {
    createFriendController: (req, res)=>{
        var body = req.body
        console.log(req);
        console.log(body);
        createFriend(body, (err, result)=>{
            if(err){
                console.log(err)
                return res.json({
                    success: false,
                    message: "Not able to create new user"
                })
            }
            return res.status(200).json({
                success: true,
                message: result
            })
        })
    },
    loginFriendByEmailController: ()=>{},
    getFriendByIdController: ()=>{},
    getFriendsController: ()=>{},
    updateFriendController: ()=>{},
    deleteFriendController: ()=>{}
}    