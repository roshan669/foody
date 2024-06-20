const express=require('express');
const mongoDB=require('./db');

mongoDB();

const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send('Hello Roshan')
})

app.listen(port,()=>{
    console.log(`app listning on port ${port}`)
})