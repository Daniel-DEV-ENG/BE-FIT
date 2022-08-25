const crypto = require('crypto');

var await = require('await');
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');


const nodemailer = require('nodemailer');

const sendgridTransport = require('nodemailer-sendgrid-transport');
const email = require('mailersend/src/modules/email');



 const api_key='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'


exports.postLogin = async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
        return res.status(404).json({
            msg: 'Wrong Username or Email or Password '
        })
    }
    const check = await bcrypt.compare(req.body.password, user.password);
    if (!check) {
        return res.status(404).json({
            msg: 'Wrong Username or Email or Password '
        })
    }
    const token = JWT.sign({id: user.user_id}, api_key)
    res.status(200).json({
        token: token,
        role:user.isAdmin,
        msg:'Welcome Back ....!!!!!'
    })

} catch (error) {
    res.status(404).json({
        status: 'Error',
        msg: error.message
    })
}
}  

exports.getme = async (req, res, next) => {
  
  try {
    let user = await User.findOne({ where: { user_id: req.id.id } }).then((user)=>{
      console.log(user);
     return res.send(user.dataValues);

    })
  } catch (error) {
      // Access Denied
      return res.status(401).send(error);
  };


} 
exports.getme = async (req, res, next) => {
  
  try {
    let user = await User.findOne({ where: { user_id: req.id.id } }).then((user)=>{
      console.log(user);
     return res.send(user.dataValues);

    })
  } catch (error) {
      // Access Denied
      return res.status(401).send(error);
  };


} 
exports.UpdateInfo = async (req, res, next) => {
  const id =req.id.id
  console.log(id)
  const user_id = id
  const updatedFname = req.body.userFirstName;
  const updatedlname = req.body.userLastName;
  const updatedemail = req.body.email;
  const updatedpass = req.body.password;
  const updatedphone = req.body.phone;
  const updateAddress = req.body.Address;
  const Age = req.body.Age
  const gender = req.body.gender
  
await  User.findByPk(user_id)
      .then(user => {
          user.userFirstName = updatedFname;
          user.userLastName = updatedlname;
          user.Address = updateAddress;
          user.phone = updatedphone;
          user.password = updatedpass
          user.email = updatedemail
          user.Age = Age
          user.Gender = gender
          return user.save();
      })
      .then(() => {
          res.status(200).send("user update");
      })
      .catch(err => {
        res.send(err)
          console.log('the user dont founded plz try again')
          //res.status(404).send('error ')
         // next(ErrorApi.NOT_FOUND('user is not found and something wrong'))
          //return;

          //throw new Api404Error(`user with id :${req.params.id} not found`);
      });
}




exports.postSignup = async (req, res, next) => {
  const userLastName = req.body.userLastName;
  const userFirstName = req.body.userFirstName;
  const phone = req.body.phone;
  const Age = req.body.Age;
  const Gender = req.body.Gender;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  
try{
 const alreadyExistsUser= await User.findOne({ where: { email: req.body.email } })
 if(alreadyExistsUser)
 {
   return res.status(200).json({message:"User with email already exists"})
 }
   hashedPassword= await bcrypt.hashSync(password,10);
       const user = new User({
         userLastName: userLastName,
         userFirstName: userFirstName,
         phone: phone,
         Age: Age,
         Gender: Gender,
         username: username,
         email: email,
         password: hashedPassword,


       });
       await user.save();
       console.log(user.password);
       let token = JWT.sign({ id: user.user_id ,user:user }, api_key)
       return res.status(200).json({
           user: user,
           token: token
       })
     }catch(error){
      res.status(404).json({
        status: 'Error',
        msg: error.message
    })
    }
       

};

exports.postLogout = (req, res, next) => {
  console.log('hi ---------------------------------------------------------------------------------------');
  req.session.destroy(err => {
    console.log(err);


  });
  return res.redirect('/');
};




exports.getReset = (req, res, next) => {

  let message = req.flash('error');
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render('auth/reset', {

    path: '/reset',
    pageTitle: 'Rest Password',
    errorMessage: message,
    //csrfToken: req.csrfToken() ,
    isAuthenticated: false
  });
}


exports.PostReset = (req, res, next) => {




  crypto.randomBytes(32, async (err, buffer) => {
    if (err) {
      console.log(err);
      return res.redirect('/reset');
    }
    const token = buffer.toString('hex');
    await User.findOne({ where: { email: req.body.email } }).then(user => {
      if (!user) {
        req.flash('error', 'NO account with this email');
        res.json({ error: req.flash('error') });
        //  return res.redirect('/reset');
      }
      if (user) {
        user.resetToken = token;
        user.resetTokenExpiration = Date.now() + 36;
        return user.save();
      }
    }).then(user => {

      // res.redirect('/');


      return transporter.sendMail({
        to: req.body.email,
        from: 'fajer335544@hotmail.com',
        subject: 'Password reset',
        html: `  
        <h1> Fitness GYM </h1>
        
        <p>you requested password reset</p>
<p> Click this <a href="http://localhost:3000/reset/${token} " >button</a>  to reset your password</p>  `


      });



    }).catch(err => {
      console.log(err);
    });
  })
}




exports.getNewPassword = (req, res, next) => {
  const token = req.params['token'];

  req.flash('token', token);
  User.findOne({ where: { resetToken: token, resetTokenExpiration: Date.now() } })
    .then(user => {
      let message = req.flash('error');
      if (message.length > 0) {
        message = message[0];
      } else {
        message = null;
      }
      res.render('auth/new-password', {
        path: '/new-password',
        pageTitle: 'New Password',
        errorMessage: message,
        isAuthenticated: false
        // userId: user._id.toString()
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postNewPassword = (req, res, next) => {

  const token1 = req.flash('token');
  //   res.send(token);
  const newPassword = req.body.password;

  const token = token1.slice(0, -1);

  return bcrypt.hash(newPassword, 12).then(hash => {

    User.update({ password: hash }, { where: { resetToken: token } })
      .then(
        res.redirect('/login')
      );
  });

};
exports.dani =( async (req, res) => {

// const user=User.findOne({email:req.body.email})
// if(!user) return res.status(400).send("......");

const salt =await bcrypt.genSalt(10);
user.password=await bcrypt.hash(user.password,salt);

const user = new User({
  userLastName: userLastName,
  userFirstName: userFirstName,
  phone: phone,
  Age: Age,
  Gender: Gender,
  username: username,
  email: email,
  password: hashedPassword

}).then(async(user)=>{
  await user.save();
  const token = user.generateAuthToken();
  res.header('x-login-token',token).send(user)
})

})
  

