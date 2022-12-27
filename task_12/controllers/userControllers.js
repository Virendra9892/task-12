const db = require("../models/index");
const user = db.user;

exports.registerUser = async(req,res,next)=>{
    try{
       let body = req.body;
       let exist = await user.findOne({where:{email:body.email}});
       if(exist){
        res.status(403).send({message:"User Already Exist."});
       }
       let result = await user.create({
        userName:body.userName,
        email:body.email,
        password:body.password
       });
       if(result){
        res.send({status:200,message:"User Regester Sucessfully. ",result})
       }
    }
    catch(error){
        next(error)
    }
}