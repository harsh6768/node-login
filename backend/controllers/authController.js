const  mongoose=require('mongoose');
const path=require('path');
const bcrypt=require('bcrypt');  //to encrypt the password

const User=require('../databases/db.users');

mongoose.connect('mongodb://localhost/usersDb');
let db=mongoose.connection;

//check for the connection
db.once('open',()=>{
    console.log('Connected to MongoDB');
});

//check for the error
db.on('error',(err)=>{
    console.log(err);
});


let signUpPage=(req,res)=>{

    const {name,email,password}=req.body;
    //If user forget to enter any data
    if(!(name && email && password)){
        // console.log('Please enter the valid information!!!')
    }else{
      
    //to encrypt the password 
    const saltRounds = 10;
    let hashPassword;
    bcrypt.hash(password,saltRounds,(err,hash)=>{
          //hashPassword=hash;
          //console.log(hash)
          let user=new User({
                name,email,password:hash
          })
        
        //To save the data into the database using mongoose
        user.save((err,user)=>{
            if(err) return console.log(err)
            //console.log(`Data of ${user.name} inserted Successfully!!!`);
        });
     
        //console.log("Data inserted Successfully!!!")
        let logoutPath=path.join(__dirname+'../../../client/views/home.ejs');
        res.render(logoutPath);
    })
  }

}

let loginPage=(req,res)=>{
   
    const { name,password}=req.body;
    console.log(name,password);
    
    if(!(name && password)){
        //console.log('Please fill valid information!!!');
    }else{
        //to fetch the users from the mongoose
        User.find({},(err,users)=>{

            if(err) return;
            
            for(let user of users){
                console.log(user)
                if(user.name==name){
 
                    // //to compare the password
                    bcrypt.compare(password,user.password,(err,resolve)=>{
                            if(err) console.log(err)
                            let logoutPath=path.join(__dirname+'../../../client/views/home.ejs');
                            res.render(logoutPath);
                           // console.log("Login Successfull!!!");
                            return;
                    })
                    // let logoutPath=path.join(__dirname+'../../../client/views/home.ejs');
                    // res.render(logoutPath);
                    // count++;

                }
                
            }
        })
    }
}

let logoutPage=(req,res)=>{
    let logoutPath=path.join(__dirname+'../../../client/views/signup.ejs');
    res.render(logoutPath);
    //console.log('Logout Successfully!!!');
}

module.exports={
    signUpPage:signUpPage,
    loginPage:loginPage,
    logoutPage:logoutPage
}