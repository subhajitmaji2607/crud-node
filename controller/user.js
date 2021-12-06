
//import model
const User = require('../models').user;

//Creating new user
exports.userCreation= async(req,res)=>{
    var user = await User.create({
        first_name: req.body.firstname,
        last_name : req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        mobile_no:req.body.mobileno
    })

    res.json({
        user
    })
}

//Showing all User
exports.userList = async(req,res)=>{
    const userlist = await User.findAll({
        include: [{ all: true }]
    })

    res.json({
        userlist
    })
}

//select single User
exports.userDetails = async (req,res)=>{
    const userId = req.params.id
    const user = await User.findOne({where :{id : userId}
    })

    res.json({
        user
    })
}

//update User
exports.updateUserDetails = async(req,res)=>{
    const userId = req.params.id
    const user = await User.update({
        first_name: req.body.firstname,
        last_name : req.body.lastname,
        email:req.body.email,
        password:req.body.password,
        mobile_no:req.body.mobileno
    },{
        where : {id : userId}
    })

    res.json({
        user
    })
}

//delete user
exports.deleteUserDetails = async(req,res)=>{
    const user = await User.destroy({
        where : {
            id : req.params.id
        }
    })

    res.json({
        user
    })
}




