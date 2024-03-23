const express=require('express')
const { CreateUser, getUser, editUser, updateUser, deleteUser } = require('../controller/apiController')
const Router=express.Router()

Router.post('/user/create',CreateUser);
Router.get('/user/getuser',getUser)
Router.get('/user/edit/:id',editUser)
Router.put('/user/update/:id',updateUser)
Router.delete('/user/delete/:id',deleteUser)

module.exports=Router