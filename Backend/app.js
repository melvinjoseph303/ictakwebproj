const express = require('express');
const session = require('express-session');
const CorporatemembershipcontactusData = require('./src/model/Corporatemembershipcontactusdata');
const PartnerData = require('./src/model/Partnershipdata');
const CorporatemembershipregisterData = require('./src/model/Corporatemembershipregisterdata');
//const User = require('./src/model/Userdata');
const cors = require('cors');
var bodyparser=require('body-parser');
var nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(bodyparser.json());
username='admin';
password='1234';


// app.use(session({      //session creation
//   secret: 'keyboard cat',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { secure: false }
// }));

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   res.header("Acess-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
//   next();
// });

// function verifyToken(req, res, next) {
//     if(!req.headers.authorization) {
//       return res.status(401).send('Unauthorized request')
//     }
//     let token = req.headers.authorization.split(' ')[1]
//     if(token === 'null') {
//       return res.status(401).send('Unauthorized request')    
//     }
//     let payload = jwt.verify(token, 'secretKey')
//     if(!payload) {
//       return res.status(401).send('Unauthorized request')    
//     }
//     req.userId = payload.subject
//     next()
//   }

//   //app.get('/',function(req,res){  
//     app.get('/',verifyToken,function(req,res){
//      res.send(home);
// });

app.post('/insert',function(req,res){
   
    console.log(req.body);
   
    var contactus = {       
        name : req.body.contactus.name,
        email : req.body.contactus.email,
        msg : req.body.contactus.message
   }       
   var contactus = new CorporatemembershipcontactusData(contactus);
   contactus.save();
});
// app.get('/books',function(req,res){
    
//     BookData.find()
//                 .then(function(books){
//                     res.send(books);
//                 });
// });



app.post('/login', (req, res) => {
    let userData = req.body
    
      
    //     if (!username) {
    //       res.status(401).send('Invalid Username')
    //     } else 
    //     if ( password !== userData.password) {
    //       res.status(401).send('Invalid Password')
    //     } else {
    //       let payload = {subject: username+password}
    //       let token = jwt.sign(payload, 'secretKey')
    //       res.status(200).send({token})
    //     }
      
    // })

    let username = req.body.username;
    let password = req.body.password;

    // check for user
    if (username == 'admin' && password == '1234') {
        req.session.role = 'admin';
        console.log("admin logined successfully")
        let payload = { subject: username + password, admin:true }
        let token = jwt.sign(payload, 'secretKey')
        res.send({ status: true, token, role: req.session.role });

    } else {
      User.findOne({ Username: username, Password: password }, function (err, user) {
            console.log(req.body, "check for user");
            if (err) {
                res.send({ status: false, data: 'Response error. No Internet' });
            }
            else if (user) {
                console.log("normal user login success")
                req.session.role = 'user';
                let payload = { subject: username + password,admin:false}
                let token = jwt.sign(payload, 'secretKey')
                res.send({ status: true, token, role: req.session.role })
                console.log({ status: true, token, role: 'user' })
            } else {
                res.send({ status: false, data: 'NOT FOUND' });
            }
            console.log("user data", user)
        });
    }
});

//new user

app.post('/signup', function (req, res) {
    let item = {

        Username: req.body.user.username,
        Password: req.body.user.password


    }

    let user = User(item);
    user.save().then(function (data) {
        res.send(true);
    }).catch(function (error) {
        res.send(false);
    })

    //ends

});



app.post('/insertpartner',function(req,res){
   
    console.log(req.body);
   
    var partner = {       
        name : req.body.partner.name,
        email : req.body.partner.email,
        phone : req.body.partner.phone,
        firmname : req.body.partner.firmname,
        address : req.body.partner.address,
        district : req.body.partner.district,
        officespace : req.body.partner.officespace,
        outcome : req.body.partner.outcome,
        expectation : req.body.partner.expectation,
        profile : req.body.partner.profile,
        noofemployees : req.body.partner.noofemployees
   }       
   var partner = new PartnerData(partner);
   //partner.save();
   try{
    partner.save();
    sendConfirmationMail(partner, (err, info) => {
       if (err) {
         console.log(err);
         res.status(400);
         res.send({ error: "Failed to send email" });
       } else {
         console.log("Email has been sent");
         res.send(info);
       }
     });
    }
    catch(err){
   
       console.log(err+"not connected");
    }
});

app.post('/insertcorporatemember',function(req,res){
   
    console.log(req.body);
   
    var corporatemember = {       
        name : req.body.corporatemember.name,
        address : req.body.corporatemember.address,
        website : req.body.corporatemember.website,
        head : req.body.corporatemember.head,
        nature : req.body.corporatemember.nature,
        type : req.body.corporatemember.type,
        identity : req.body.corporatemember.identity,
        gstn : req.body.corporatemember.gstn,
        dateofincorporation : req.body.corporatemember.dateofincorporation,
        cdname : req.body.corporatemember.cdname,
        phone : req.body.corporatemember.phone,
        email : req.body.corporatemember.email,
        skillset : req.body.corporatemember.skillset,
        noofemployees : req.body.corporatemember.noofemployees,
        nooffreshers : req.body.corporatemember.nooffreshers,
        noofpatents : req.body.corporatemember.noofpatents,
        experts : req.body.corporatemember.experts,
        fresher : req.body.corporatemember.fresher,
        internship : req.body.corporatemember.internship,
        training : req.body.corporatemember.training,
        capstone : req.body.corporatemember.capstone,
        message : req.body.corporatemember.message
   }       
   var corporatemember = new CorporatemembershipregisterData(corporatemember);
   //corporatemember.save();
   try{
    corporatemember.save();
    sendConfirmationMail(corporatemember, (err, info) => {
       if (err) {
         console.log(err);
         res.status(400);
         res.send({ error: "Failed to send email" });
       } else {
         console.log("Email has been sent");
         res.send(info);
       }
     });
    }
    catch(err){
   
       console.log(err+"not connected");
    }
});
//sent mail---------------------
const sendConfirmationMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "projectfsd711@gmail.com",
        pass: "ictakweb02@"
      }
    });

    const mailOptions = {
        from: `"ICTAK", "projectfsd711@gmail.com"`,
        to: `<${user.email}>`,
        subject: "Brochure download link",
        html: "<h3>Greetings from ICTAK</h3><p></p>"
      };
      
      transporter.sendMail(mailOptions, callback);
     
  }
  
 //End Send mail------------------------------------------- 
app.listen(3000, function(){
    console.log('listening to port 3000');
});

