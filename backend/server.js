const express = require('express');
const db = require('./config/keys').MONGOURI
const mongoose = require('mongoose');


const app = express();

//port
const PORT = process.env.PORT ||4000;

//middleware
app.use(express.json());

//database connection
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=>{console.log('database connected')})
.catch(err=>console.log(err.message));

//routers
const postRouter = require('./router/post.js')

app.use('/',postRouter);




app.listen(PORT,()=>{console.log(`server listining at ${PORT}`)})