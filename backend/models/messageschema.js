import mongoose, { mongo } from "mongoose";
import validator from "validator";

const messageschema=new mongoose.Schema({
   firstName: {
    type: String,
    required: true,
    minLength: [3,"first name must conatain atleast three characters!"]
   },
   lastName:{
      type: String,
    required: true,
    minLength: [3,"last name must conatain atleast three characters!"]
   },
   email:{
      type: String,
    required: true,
    validate: [validator.isEmail,"please provide a valid email"]
   },
   phone:{
      type: String,
    required: true,
    minLength: [10,"phone number must contain exact 10 digits!"],
    maxLength: [10,"phone number must contain exact 10 digits!"]
   },
   message:{
      type: String,
    required: true,
    minLength: [10,"message must conatain atleast 10 characters!"]
   }
});

export const Message=mongoose.model("Message",messageschema);