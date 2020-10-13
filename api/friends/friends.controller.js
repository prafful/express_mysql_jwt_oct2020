var {
        createFriend, 
        getFriendByEmail,
        getFriendById,
        getFriends,
        updateFriend,
        deleteFriend
    } = require('./friends.services')
var { hashSync, genSaltSync, compareSync } = require("bcrypt");
var { sign } = require("jsonwebtoken");

module.exports = {
    welcome: (req, res)=>{
        return res.json({message: "Hello from Node Express App!!!!"})
    },
    createFriendController: (req, res)=>{
        const body = req.body
        console.log(body);
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        createFriend(body, (err, result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
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
    loginFriendByEmailController: (req, res)=>{
        const body = req.body
        getFriendByEmail(body.email, (err, results) => {
          if (err) {
            console.log(err)
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            })
          }
          const result = compareSync(body.password, results.password);
          if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, process.env.SECRET_KEY, {
              expiresIn: "1h"
            })
            return res.json({
              success: 1,
              message: "login success",
              token: jsontoken
            })
          } else {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            })
          }
        })
      
    },
    getFriendByIdController: (req, res)=>{
        const id = req.params.id
        getFriendById(id, (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        if (!result) {
            return res.json({
            success: 0,
            message: "Friend not Found"
            })
        }
        result.password = undefined;
        return res.json({
            success: 1,
            data: result
        })
        })
    },
    getFriendsController: (req, res)=>{
        getFriends((err, results) => {
            if (err) {
              console.log(err);
              return
            }
            return res.json({
              success: 1,
              data: results
            })
          })
    },
    updateFriendController: (req, res)=>{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt);
        updateFriend(body, (err, results) => {
        if (err) {
            console.log(err)
            return
        }
        return res.json({
            success: 1,
            message: "update success!!!!"
        })
        })
    },
    deleteFriendController: (req, res)=>{
        const data = req.body;
        deleteFriend(data, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!results) {
            return res.json({
            success: 0,
            message: "Record Not Found"
            });
        }
        return res.json({
            success: 1,
            message: "friend delete success!!!!"
        });
        })
        }
}    