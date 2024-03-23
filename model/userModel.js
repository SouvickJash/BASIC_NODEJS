const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const UserSchema=new Schema({
   name:{
      type:String,
      require:true
   },
   email:{
      type:String,
      require:true
   },
   city:{
     type:String,
     require:true
   },
   phone:{
      type:Number,
      require:true
   },
   password:{
      type:String,
      require:true
   }
},

)
const UserModel=mongoose.model('node',UserSchema)
module.exports=UserModel