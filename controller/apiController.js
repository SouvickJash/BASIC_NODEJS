const example = require("../model/userModel");

//user create
const CreateUser = async (req, res) => {
  try {
    const { name, email, city, phone, password } = req.body;

     if (!name && !email && !city && !phone && !phone) {
      return res.status(404).json({
        status: false,
        message: "all input is required"
      });
    }

    const UserData = new example({
      name,
      email,
      city,
      phone,
      password,
    });
    const result = await UserData.save();
    return res.status(201).json({
      status: true,
      message: "Data Create Successfully",
      newdata: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

//user get
const getUser = async (req, res) => {
  try {
    const result = await example.find();
    console.log(result)
    return res.status(200).json({
      status: true,
      message: "data fetch successfully",
      newdata: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
//edit user
const editUser=async(req,res)=>{
   try{
      const id=req.params.id
      const result=await example.findById(id)
      return res.status(200).json({
         status:true,
         message:"Edit data",
         newdata:result
      })
   }
   catch(error){
     return res.status(500).json({
      status:false,
      message:error.message
     })
   }
}
//update user
const updateUser=async(req,res)=>{
   try{
      const id= req.params.id;
      const result= await example.findByIdAndUpdate(id,req.body,{
         new:true
      })
      return res.status(201).json({
         status:true,
         message:"Userdata update successfully",
         newdata:result
      })
   }
   catch{
      return res.status(500).json({
         status:false,
         message:error.message
      })
   }
}
// delete user
const deleteUser=async(req,res)=>{
   try{
      const id=req.params.id;
      const result=await example.findByIdAndDelete(id)
      return res.status(201).json({
         status:true,
         message:"User data delate successfully",
         data:result
      })
   }
   catch(error){
       return res.status(500).json({
         status: false,
         message: error.message
       })
   }
}


module.exports = {
  CreateUser,
  getUser,
  editUser,
  updateUser,
  deleteUser
};
