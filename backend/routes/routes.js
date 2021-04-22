
const express =require('express')
const router=express.Router()
const Contact=require('../models/ContactModel')

router.post('/contact',(request,response)=>{
    const contact = new Contact({
        name:request.body.name,
        subject:request.body.subject,
        email:request.body.subject,
        phone:request.body.phone,
        message:request.body.message,


    })
    contact.save()
    .then(data=>{
        response.json
    })
    .catch(error =>{
        response.json(error)
    })
})

module.exports=router