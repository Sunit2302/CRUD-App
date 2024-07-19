const mongoose = require("mongoose");

const DB = "mongodb+srv://shadow:shadow123@cluster0.def7ixc.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));