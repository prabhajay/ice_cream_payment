require('dotenv').config()

const express = require('express')

const app = express()

const port=process.env.PORT || 3000

app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`);
  })


  //End points

  app.get()
  app.get()
  app.post()
  app.patch()
  app.delete()
  

  