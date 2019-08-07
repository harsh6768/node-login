#####
## :heart: Star :heart: the repo to support the project or :smile:[Follow Me](https://github.com/pedromassango).Thanks!

# Simple Login Page

## MVC STRUCTURE
  [image credit](https://dribbble.com/shots/6322769-MVC-Technology-Website-Illustration-2)
  
  <img src="https://github.com/harsh6768/node-login/blob/master/images/mvc.png" alt="">
  
 ## What is MVC?
    
  The MVC is an architectural pattern that separates an application into three main logical components.
  1. Model
  2. View
  3. Controller
  
  

            node-login
            ├── app.js
            ├── backend
            │ ├── controllers
            │ │ ├── authController.js
            │ │ └── controller.js
            | | !-- schema.joi.js
            │ ├── databases
            │ │ └── db.users.js
            │ └── routes
            │   └── mainRoutes.js
            ├── client
            │ ├── images
            │ │ └── bg.jpg
            | | !-- bg1.jpg
            │ └── views
            │   ├── index.ejs
            │   ├── home.ejs
            │   └── signup.ejs
            |   |-- login.ejs
            └── package.json
                    
                    
   
### Used Dependencies:
##### 1. express : to make server and routes
    
   [documentation of express](http://expressjs.com/)
      
       npm install --save express
       
#### 2. mongoose : to make the query for database and connect with mongodb database
    
   [documentation of mongoose](https://www.npmjs.com/package/mongoose)
      
       npm install --save mongoose
       
#### 3. ejs(extended javascript): template engine to render the ejs files to html file
    
   [documentation of ejs](https://www.npmjs.com/package/ejs)
      
       npm install --save ejs

#### 4. body-parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body                  property.
    
   [documentation of body-parser](https://www.npmjs.com/package/body-parser)
      
       npm install --save body-parser

      
  
  

1. run the below command to download all the dependency

       npm install

