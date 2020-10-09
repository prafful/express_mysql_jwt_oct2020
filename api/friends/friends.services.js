var pool = require('../../dbconfig/databaseconfig')

module.exports = {
    createFriend: (body, callback)=>{
        pool.query(
            'insert into register (name, email, password) values (?,?,?)',
            [
             body.name,
             body.email,
             body.password
            ],
            (err, result)=>{
                if(err){
                    callback(err)
                }
                return callback(null, result)
            }
        )
    },
    getFriendByEmail: ()=>{},
    getFriendById: ()=>{},
    getFriends: ()=>{},
    updateFriend: ()=>{},
    deleteFriend: ()=>{}
}