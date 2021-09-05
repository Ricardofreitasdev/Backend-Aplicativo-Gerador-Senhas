const nodemailer = require("nodemailer")

const remetente = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    requireTLC:true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

async function formatEmail(user){
    const emailFormatado = {
        from: process.env.MAIL_USER,
        to: user.email,
        subject: `Seja bem vindo ${user.name}`,
        html: '<p>você ganhou <span>10%</span> de desconto</p>'
    }

    return emailFormatado
}

async function sendEmail(emailASerEnviado){
    const resp = await remetente.sendMail(emailASerEnviado)
    .then((res) => { 
        return res
    })
    .catch((err) => console.log(err))
    return resp;
}


module.exports = { sendEmail, formatEmail }