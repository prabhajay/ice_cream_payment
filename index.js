require('dotenv').config()
const controllers=require('./controllers')
const 
{
  getpayment,
  getpayments,
  createpayment,
  updatepayment,
  deletepayment
} = require('./controllers').payment

require('./db')()

const express = require('express')

const app = express()

const port=process.env.PORT || 3000

  //End points

app.get('/api/v1/payment/:id',getpayment)
app
  .route('/api/v1/payment')
  .get(getpayment)
  .post(createpayment)
  .patch(updatepayment)
  .delete(deletepayment)

//Catches all Endpoints || 404 route

app.get('*',(req,res)=> res.send('404 Not Found'))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
  })