const {Router} = require('express')
const nodemailer = require('nodemailer')
const router = Router()

router.post('/send-email', async (req, res) => {
    const {name, email, message} =  req.body
    contentHTML = `
        <h1> Problem Information </h1>
        <ul>
            <li>Username: ${name} </li>
            <li>User Email: ${email} </li>
        </ul>
        <p>Message:</p>
        <p> ${message} </p>
    `

    /* onst transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
    ciphers:'SSLv3'
    },
    requireTLS:true,//this parameter solved problem for me
    auth: {
    user: 'kazimija@student.eursc.eu',
    pass: 'KochanaRodzina12'
        }
        }); */

    /* const transporter = nodemailer.createTransport({
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: false,
        auth: {
            api_key:"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"
        }
    }) */

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'kamryn.vonrueden34@ethereal.email',
            pass: 'xEF1z1N8PU9WbJSae4'
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "'Wenome Server' <kamryn.vonrueden34@ethereal.email>",
        to: 'juan.kazimierczak@gmail.com',
        subject: 'Website Problem Form',
        html: contentHTML
    })

    console.log('Message send', info.messageId)

    res.redirect('/ok')
    
})

module.exports = router