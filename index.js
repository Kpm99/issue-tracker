//port
const port =process.env.PORT || 8000;
const express=require('express');

const bodyParser=require('body-parser');
//setting up app
const app=express();
const expressLayouts=require('express-ejs-layouts')


app.use(express.urlencoded());

//setting mongoose
const mongoose=require('./config/mongoose');
app.use(express.static('./assets'));
app.use(expressLayouts)
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended:false}));
app.set('/views','./views')


app.use('/',require('./routes'))

//starting server
app.listen(port,function(err){
    if(err){
        console.log("error connecting to server")
    }
    console.log("connected to port",port);

})
