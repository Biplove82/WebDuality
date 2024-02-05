const userModells=require("../Modells/userModells");
const bcrypt=require("bcrypt");

const createUser = async function(req,res){
    try {
        let data =req.body;
       let createdata= await userModells.create(data);
        res.status(201).send({message:"Successfully created",createdata});

    } catch (error) {
        res.status(500).send({message:"Data not founnd"});
    }
};

const signup = async function(req,res){
    try {
        let{firstName,lastName,email,password,phoneNumber,address}=req.body;
        if(!firstName || !lastName||!email||!password||!phoneNumber||!address){
            res.status(400).send({msg:"Invalid Credential"})
            }
           let checkEmailExist=await userModells.findOne({email:email});
           if(checkEmailExist){
            res.send({msg:"email already exist"});

           }
          const hasdedpassword= await bcrypt.hash(password,10)


           const newuser= new userModells({
            firstName : firstName , 
               lastName : lastName , 
               email : email ,
               password:hasdedpassword,
               phoneNumber:phoneNumber,
               address:address
           })
           await newuser.save();
           res.status(200).send({msg:"User registered sucessfully"});
    } catch (error) {

        res.status(500).send({msg:"server error"});
    }
        
    };

    //User Login
    const login =async function(req,res){
      try {
        let{email,password}=req.body;
        
      } catch (error) {
        
      }
       
    }



module.exports={createUser,signup};
