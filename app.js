const express = require('express');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const path=require('path');
const mainRoutes=require('./backend/routes/mainRoutes');

const app=express();

//morgan logger as development
app.use(morgan('dev'));

//body parser to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setting the views
app.set("views", __dirname + "/client/views")

//to render the .ejs files into the html file
app.engine("html", ejs.renderFile)
app.set("view engine", "ejs");

//setting the views 
app.use(express.static(path.join(__dirname, "client/images/")))

//it will use / as default route
app.use("/", mainRoutes);

//setting the port 
app.set('port',process.env.PORT||3000);

//running the server 
app.listen(app.get('port'),()=>{
    console.log(`We are up on port number${app.get('port')}`);
});