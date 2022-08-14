const mongoose = require('mongoose')

module.export = ()=>{
const {DB_USERNAME,
    DB_PASSWORD,
    DB_NAME}=process.env
const uri=`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.ikahhmw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(uri).catch(err=>{
    console.error(err)
})

mongoose.connection.on('open',() => {
    console.log('mongoose conencted successfully')
})
}