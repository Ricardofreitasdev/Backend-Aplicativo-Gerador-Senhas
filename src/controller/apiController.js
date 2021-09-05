const { formatEmail, sendEmail } = require("../services/nodemailer")
const User = require("../models/user")
const Log = require("../models/log")


async function index(req, res){
    const AllUsers = await User.findAll()
    res.json({ AllUsers })
}

async function create(req, res) {
    const { name, email } = req.body
    const newUser = await User.create({
        name,
        email
     },{
        logging: (sql, queryObject) => {
        logs(sql, queryObject)
      }
    })
  
    const dados = await formatEmail(newUser)
    const sendd = await sendEmail(dados)
    console.log(sendd);
    res.json({
    dados: newUser,
    email: sendd
  })

}


async function logs (sql, queryObject) {  
    await Log.create({
        sql: sql,
        values: queryObject.bind.join()
    })
  }

module.exports = { index, create }