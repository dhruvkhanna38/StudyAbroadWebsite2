const sgMail = require("@sendgrid/mail");

const sendGridAPIKey = process.env.SENDGRID;

sgMail.setApiKey(sendGridAPIKey);


const sendEnquiryEmail = (name , email , subject , message, phoneNumber)=>{
    sgMail.send({
        to : "ahuja.bhavay123@gmail.com" , 
        from :"dhruvkhanna38@gmail.com",
        subject : subject, 
        text:`Hi! Bhavay, You have a new enquiry from ${name}.
        Email: ${email}
        Contact Number: ${phoneNumber}
        Message: ${message}`
    });
}

// sgMail.send({
//     to : "dhruvk.me.16@nsit.net.in" , 
//     from: "dhruvkhanna38@gmail.com",
//     subject : "This is my first mail", 
//     text : "Hi!"
// });

module.exports = {sendEnquiryEmail};