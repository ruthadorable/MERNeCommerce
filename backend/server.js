var express =require('express')
var dotenv =require('dotenv')
var colors =require('colors')
var connectDB =require('./config/db.js')
var allproducts = require('./data/allproducts.js')
var latestproducts =require('./data/latest.js')
var axios = require('axios')
var productRoutes =require('./routes/productRoutes.js')
var {notFound,errorHandler} =require('./middleware/errorMiddleware.js')


dotenv.config()
connectDB()
const app=express()

app.get('/',(req,res)=>{
    res.send('API is running....')
})
app.use('/api/allproducts',productRoutes)
app.use('/api/allproducts/:id',productRoutes)
app.use(notFound)
app.use(errorHandler)
app.get('/api/allproducts',(req,res)=>{
    res.json(allproducts)
})
app.get('/api/allproducts/:id',(req,res)=>{
    const product=allproducts.find((p)=>p._id===req.params.id);
    res.json(product);
})
app.get('/api/latestproducts',(req,res)=>{
    res.json(latestproducts)
})
app.get('/api/latestproducts/:id',(req,res)=>{
    const latestproduct=latestproducts.find((p)=>p._id===req.params.id);
    res.json(latestproduct);
})
const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT})`.yellow.bold)
        )