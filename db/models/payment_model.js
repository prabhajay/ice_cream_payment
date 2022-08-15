const { required } = require('joi')
const mongoose=require('mongoose')

const paymentSchema=new mongoose.Schema({
    payment:{
        type:String,
        required:[true,'to do texr is required'],
        min:5,
        max:512
    },
    isCompleted:{
        type:Boolean,
        default:false
    }
})

const payment=mongoose.model('payment',paymentSchema)

module.exports=payment