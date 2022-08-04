const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/FAQmsgGC",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Sucessfully connected to mongodb");
}).catch((err)=>console.log(err));

// main().then(()=>{console.log("Sucessfully Connected");}).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/FAQmsgGC');
// }