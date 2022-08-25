const express = require('express');
const webPush = require('web-push');
const bodyParser = require("body-parser");
const path = require("path");

const app = express()
app.use(bodyParser.json())
const PublicVapidKey = 'BBWY8BRnP4weIFV3oS3tJd1mVGdmSxrJw1WoZFGvuyneZ-cUk2a9lu9gYxzrCkfvR6Yp18piEYuoYWW3S6TkS9I';
const PrivateVapidKey = 'q0AMGOnfiz-a-lDjBpvzxniEVeZNQ-ZTzZG8xCaVOLI'
//set static path
app.use(express.static(path.join(__dirname,"client")))

//////run web push/////
webPush.setVapidDetails('mailto:test@test.com', PublicVapidKey, PrivateVapidKey)

///subscrib route/////////////
app.post('/subscribe', (req, res) => {
    //GET PushSubscribe object
    const subscription = req.body;
    //send 201 - recourse created 
    res.status(201).json({})
    //creat payload
    const payload = JSON.stringify({ tittle: 'push test' });
    //pass object into send notification 
    webPush.sendNotification(subscription, payload).catch(err => console.error(err));


})
