const path=require('path');


let homePage=(req,res)=>{

    let homePath=path.join(__dirname+'../../../client/views/index.ejs');
    res.render(homePath);
}

let signUpPage=(req,res)=>{

    let signUpPath=path.join(__dirname+'../../../client/views/signup.ejs');
    res.render(signUpPath)
}

let loginPage=(req,res)=>{

    let loginPath=path.join(__dirname+'../../../client/views/login.ejs')
   // res.sendFile(loginPath);
    res.render(loginPath);
}

module.exports={
    homePage:homePage,
    signUpPage:signUpPage,
    loginpage:loginPage
}