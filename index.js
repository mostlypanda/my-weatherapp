const express=require('express');
const hbs=require('hbs');
const path=require('path');
const request=require('request');

const app=express();

app.get('',function(req,res){
    res.send('hyy this is weather app');
});

app.get('/weather',function(req,res){
    res.send('this is weather endpoint');
});

app.get('*',function(req,res){
    res.send('page not found');
});

const PORT=3000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});