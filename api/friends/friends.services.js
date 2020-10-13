var pool = require('../../dbconfig/databaseconfig')

module.exports = {
    createFriend: (body, callback)=>{
        console.log(body)
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
    getFriendByEmail: (email, callBack) => {
        pool.query(
          `select * from register where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error)
            }
            return callBack(null, results[0]);
          }
        )
    },
    getFriendById: (id, callBack) => {
        pool.query(
          `select id,name,email from register where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error)
            }
            return callBack(null, results[0])
          }
        )
    },
    getFriends: callBack => {
        pool.query(
          `select id, name, email from register`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        )
    },
    updateFriend: (data, callBack) => {
        pool.query(
          `update register set name=?, email=?, password=? where id = ?`,
          [
            data.name,
            data.email,
            data.password,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        )
    },
    deleteFriend: ((data, callBack) => {
        pool.query(
          `delete from register where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error)
            }
            return callBack(null, results[0])
          }
        )
    })
}