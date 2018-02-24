'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'hackillinois@yahoo.com', // generated ethereal user
            pass: 'testpassword' // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
         }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'hackillinois <hackillinois@yahoo.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Issues Update Notification', // Subject line
        text: 'You have updated your issues', // plain text body
        html: '<b>You have update your issues</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});