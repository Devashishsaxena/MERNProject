import nodemailer from 'nodemailer'
export function sendMail(email,password) {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'devashishsaxena1997@gmail.com',
            pass: 'gccycjnoivejeyxp'
        }
    });

    var mailOptions = {
        from: 'devashishsaxena1997@gmail.com',
        to: email,
        subject: 'Verification mail Business',
        html: "<h1>Welcome To Business Project</h1>you have successfully register to our site, your login credentials are attached below<h3>Username:" + email + "<h3>Password :" + password + "</h3><h2>click on the link below to verify your account</h2>http://lochalhost:3000/adminverify" + email
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}