const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'User email is reqired'],
        unique:true,
        min:5,
        max:128,
        match:[/^\s+@\s+$/g,'Invalid email format'],
    },
    passwordHash:{
        type:String,
        required:[true,'Password is required'],
        min:5,
        max:128
    }
})

const User=mongoose.model('User',userSchema)

module.exports=User
