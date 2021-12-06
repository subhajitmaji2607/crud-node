const express = require('express')
const router = express.Router()

const user = require('../controller/user')

router.post('/create-user',user.userCreation)            //Createuser   
router.get('/list-user',user.userList)                   //user list
router.get('/user/:id',user.userDetails)                 //show single user
router.put('/update-user/:id',user.updateUserDetails)    //update a user
router.delete('/delete-user/:id',user.deleteUserDetails) //Delete a user
module.exports = router;
