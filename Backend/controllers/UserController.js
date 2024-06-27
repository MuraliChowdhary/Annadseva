const userModel=require('../Models/ModelUserSchema');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const SignUpuser=async (req,res)=>{
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already exists, please try again!" });
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.create({
            email: req.body.email,
            password: hashPassword,
            role: req.body.role
        });
        res.status(201).json({ msg: "User created successfully", user: user });
    } catch (error) {
        res.status(500).json({ msg: "Error creating user", error: error.message });
    }
}






const LoginUser=async (req,res)=>{

    try{
        const email=req.body.email;
        const password=req.body.password;
        const user=await userModel.findOne({email:email});
        const validPass = await bcrypt.compare(password, user.password);
            if (!validPass) return res.status(401).json({ message: "Invalid login credentials! Please check it." });
            
        let payload={email:user.email};
        const token=jwt.sign(payload,"SecretKey",{expiresIn:'1h'})
        res.status(200).json({token:token,email:email,password:password,role:user.role})
    }
    catch(error){
        res.status(200).json({msg:"user login unsuccessful",error:error.message})
    }
}
module.exports={SignUpuser,LoginUser}