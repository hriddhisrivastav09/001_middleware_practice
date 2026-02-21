const express = require('express') ;
const router = express.Router() ;
const validateRequest = require('../middlewares/validateRequest')
const checkApproved = require('../middlewares/checkAprroved') ;

const {db} = require('../database/db') ;

router.get('/request/:id' , checkApproved , (req , res)=>{
    const id = req.params.id ;
    if(id < 3){
        return res.status(200).json({'fruit' : `${db[id]}`}) 
    }
    return res.status(500).json({'error' : `No fruit with id ${id} exists`}) ;
    
})

router.post('/request/post' , validateRequest , (req , res)=>{
    
})