const getpayment=(req,res)=>{res.send(
    'payment get'
    )}
const getpayments=(req,res)=>{res.send(
    'payment get(s)'
    )}
const createpayment=(req,res)=>{res.send(
    'payment create'
    )}
const updatepayment=(req,res)=>{res.send(
    'payment update'
    )}
const deletepayment=(req,res)=>{res.send(
    'payment delete'
    )}
module.exports={ getpayment,
    getpayments,
    createpayment,
    updatepayment,
    deletepayment}