const express=require('express')
const mongoose=require('mongoose')
const ejs=require('ejs')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const userRoot=require('./root/userRoot')
app.use('/api',userRoot)


const PORT= 6000
const dbDriver="mongodb+srv://souvickjash9836:hahMNOgVnI9ioYbh@cluster0.3kynmom.mongodb.net/student"
mongoose.connect(dbDriver,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{

    app.listen(PORT,()=>{
        console.log(`server running port : http://localhost:${PORT}`);
        console.log(`DataBase connected successfully`);
    })
}).catch(error=>{
    console.log(error);
})