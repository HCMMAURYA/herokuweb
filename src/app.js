const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
    console.log('Deepak')
    });

    app.get("/about",(req,res)=>{
        res.render("about")
        console.log('Deepak')
        });

        app.get("/contact",(req,res)=>{
            res.render("contact")
            });

            app.get("/event",(req,res)=>{
                res.render("event")
                });
    
            app.get("/courses",(req,res)=>{
                res.render("courses")
                });

                app.get("/teachers",(req,res)=>{
                    res.render("teachers")
                    });


                    app.get("/blog",(req,res)=>{
                        res.render("blog")
                        });


app.get("/registration",(req,res)=>{
    res.render("registration")
    });


   

    app.post("/registration",async(req,res)=>{

        try {
            
                const password = req.body.password;
                const confirmpassword= req.body.confirmpassword;

                if(password ===confirmpassword){

                    const registerEmployee = new Register({

                        firstname:req.body.firstname,
                        lastname:req.body.lastname,
                        password:req.body.password,
                        confirmpassword:req.body.confirmpassword,
                        gender:req.body.gender,
                        email:req.body.email,
                        number:req.body.number

                    })
                  const registered = await registerEmployee.save();
                  res.status(201).render(index);
                }else{
                    res.send("password are not match..")
                }


            
        } catch (error) {
            res.status(400).send(error)
            
        }
        
        });
    

app.listen(port,()=>{
console.log(`server is running port no ${port}`);
})