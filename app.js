const path = require('path');
const morgan = require('morgan')
const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const nodemailer = require('nodemailer');
const sequelize = require('./utile/DataBase');
const relation = require('./utile/relations')
const config = require('config');
const app = express();
const cors = require("cors");
const Op = Sequelize.Op;
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');
const notifictation = require('./notification')
const admin = require('./routes/Admin/Admin');
const tranier = require('./routes/Coach/Coach');
const diet = require('./routes/DietRouter')
const user = require('./routes/UserRouter');
const food = require('./routes/foodRouter');

// search = require('./routes/search');
const supplement = require('./routes/supplementroutre');
var workout = require('./routes/WorkoutRouter')
const exrcise = require('./routes/ExerciseRouter');
const coach = require('./routes/CoachRouter')
const api_error_handling = require('./controllers/error/api-error-handler')
const multer = require('multer');
const webpush = require('web-push');
var socketSession = require('socket.io-mysql-session');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const auth = require('./routes/auth')
const cloudinary = require('cloudinary').v2;
////////////////////////////////config//////////////////app middleware
// if (!config.get('jwtPrivateKey')) {
//   console.log('FATAL ERROR :jwtPrivateKey is not defined')
//   process.exit(1);
// }
////////////////////////////////
app.use(api_error_handling);
app.use(express.urlencoded({ extended: true }));
try{
app.use(bodyParser.json());
}
catch(error){
  console.log(error);
}
app.use('/images', express.static('./images'))
app.use('/html', express.static('./index.html'))

//app.use(search);
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true
});

// Log the configuration
console.log(cloudinary.config())

const options = {
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: '',
  database: 'befitness'
};

const connection = mysql.createConnection(options);

const sessionStore = new MySQLStore({

}, connection);
app.use(session({
  key: 'session_cookie_name',
  secret: 'session_cookie_secret',
  store: sessionStore,
  resave: true,
  saveUninitialized: false
}));
app.use(flash())
////////////////////////////////////////A  P   I  ///////////////////////////////////////////
app.use('/gym', user);
app.use('/coach', tranier);
app.use('/admin', admin);
app.use('/viewF', food);
app.use('/viewD', diet);
app.use('/viewW', workout);
app.use('/viewEX', exrcise)
app.use('/viewCo', coach);
app.use('/viewSup', supplement)
app.use('/auth', auth)
//////////////////////////////////////////////////////////////////////////////////////
//const csurf= require('csurf');
//const csurfProtection=csurf({ cookie: true });
// process.on('unhandledRejection', error => {
//   // Prints "unhandledRejection woops!"
//   console.log('unhandledRejection', error.test);
// });

// new Promise((_, reject) => reject({ test: 'woops!' })).catch(() => { });





const http = require("http");

const { Server } = require("socket.io");
const Supplement = require('./model/Supplement');


const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(" message sender:" + data.author + " the message was sent :" + data.message);

    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});
try {
  server.listen(4000, () => {
    console.log("SERVER RUNNING");
  })
}
catch (err) {
  console.log('error in server please try again');
}






