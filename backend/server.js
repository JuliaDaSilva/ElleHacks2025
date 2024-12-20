const express = require('express');
const bodyParser = require('body-parser')
const cors =  require('cors');
const nodemailer = require('nodemailer');
//const mongoose = require('mongoose');

//Initialize the app
const app = express();
app.use(bodyParser.json());
app.use(cors());

//API to handle form submissions
app.post('/api/partner-with-us', async (req,res) => { // /api/partner-with-us: This defines the endpoint where the front-end form data will be sent.
    const{name, email, message} = req.body;            // The POST method is used because the form data (name, email, and message) needs to be sent in the request body.

    //Request Body: Using body-parser middleware, the server parses the incoming JSON data from the form submission.

    //Send an email notification
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user:'joannewijetunga04@gmail.com',
            pass: '',
        },
    });

    const mailOptions = {
        from: email,
        to: 'joannewijetunga04@gmail.com',
        subject: 'New Form Submission',
        text: `You have a new submission from ${name} (${email}): ${message})`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.error('Error sending email: ',error); //Log the error details
            return res.status(500).json({message: 'Error sending email', error: error.message});
        }

        console.log('Email sent: ' + info.response); //Log the response from Nodemailer
        res.status(200).json({message: 'Form submitted successfully'});
    });

    // Here, you can log the form data or store it in a database if needed
    console.log(`New submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Respond with a success message
    res.status(200).json({ message: 'Form submitted successfully' });

});

//Start Server
const PORT = process.env.post || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});