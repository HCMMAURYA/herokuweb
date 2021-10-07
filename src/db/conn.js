const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/compliteRegLog",{
    useNewUrlParser:true
}).then(()=>{
    console.log("connection is Successful...")
}).catch(()=>{
    console.log("no connection here..");
})