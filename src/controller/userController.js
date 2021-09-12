const User = require("../models/user")
const Log = require("../models/log")


async function index(req, res){
    const AllUsers = await User.findAll()
    res.json({ AllUsers })
}

async function create(req, res) {
    const { password, email } = req.body
    const newUser = await User.create({
        password,
        email
     },{
        logging: (sql, queryObject) => {
        logs(sql, queryObject)
      }
    })
  

    res.json({
    dados: newUser
  })

}

async function logs (sql, queryObject) {  
    await Log.create({
        sql: sql,
        values: queryObject.bind.join()
    })
}

module.exports = { index, create }