const express=require('express');
const hbs=require('hbs');
const path=require('path');
const request=require('request');
const weatherdata=require(path.join(__dirname+'/utils/weatherdata'));


const app=express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname+'/templates/views'));
hbs.registerPartials(path.join(__dirname+'/templates/partials'));
app.use(express.static(path.join(__dirname+'/public')));


app.get('',function(req,res){
    res.send('hyy this is weather app');
});

app.get('/weather',function(req,res){
    const address=req.query.address;
    weatherdata(address,(error,{temperature,description,cityName})=>{
        if(error){
            return res.send({error});
        }
        console.log(temperature,description,cityName);
        res.json({
            temp: temperature,
            desc: description,
            name: cityName
        });
    })
});

app.get('*',function(req,res){
    res.send('page not found');
});

const PORT=3000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`app is live at ${PORT}`);
});