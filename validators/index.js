const getpayment=(payment)=>{res.send(
    'payment get'
    )}
const getpayments=(payments)=>{res.send(
    'payment get(s)'
    )}
const createpayment=(createpayment)=>{res.send(
    'payment create'
    )}
const updatepayment=(updatepayment)=>{res.send(
    'payment update'
    )}
const deletepayment=(deletepayment)=>{res.send(
    'payment delete'
    )}
module.exports={ getpayment,
    getpayments,
    createpayment,
    updatepayment,
    deletepayment}