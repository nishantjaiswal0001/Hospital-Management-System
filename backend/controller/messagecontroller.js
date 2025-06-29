import {} from "../messageschema.js"
export const sendmessage=async(req,res,next)=>{
    const {firstName,lastName,email,phone,message}=req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        return res.status(400).json({
            success: false,
            message: "Please fill Full Form",
        });
        await Message.create({firstName,lastName,email,phone,message});
        
    }  
};