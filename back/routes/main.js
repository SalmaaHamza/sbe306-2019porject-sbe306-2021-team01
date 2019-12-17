const express = require('express');

const controller = require('../controllers/control');
const appointment = require('../models/appointment')
const date = require('../models/date')
const doctor = require('../models/doctor')
const patient = require('../models/patient')


const router = express.Router();

// the main route reference to the controller file  
router.get('/',controller.mainroute);

router.get('/signin',((req,res)=>{
    res.sendFile(path.join(__dirname,'../../front/views/home/signin'));
    let email = req.body.email;
    let password = req.body.password;
    patient.findOne({email:email}).then((patient)=>{
        if (!patient)
        console.log('Email Not found')
        else{
            bcrypt.compare(password,patient.password).then((returnedpassword)=>{
                if (returnedpassword){
                    res.render('../views/home/user')
                }
            })
        }
    }).catch((err)=>{ 
        console.log('ERROR ')
    })
    
}))


module.exports=router;