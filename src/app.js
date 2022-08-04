const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const bodyParser = require("body-parser")
require("./db/conn");
const async = require("hbs/lib/async");
const Messagefaq = require("./models/faqmessage");
const Pickuplocation = require("./models/pick");
const req = require("express/lib/request");

const port = process.env.PORT || 8000;



const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

// app.use(express.json());
// app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/index", (req, res) => {
    res.render("index");
});
app.get("/pickup", (req, res) => {
    res.render("pickup");
});

app.post("/pickup",(req,res)=>{
    try {
        const newOrder = Pickuplocation({
            fullName: req.body.fullName,
            mobile : req.body.mobile,
            alternatemobile: req.body.altmobile,
            houseNum : req.body.houseNum,
            landmark : req.body.landmark,
            directionsToReach : req.body.directions
        })
        const orderReceived = newOrder.save();
        res.status(200).render("index")
    } catch (error) {   
        console.log(error);
    }
})


app.get("/about", (req, res) => {
    res.render("about");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});


app.post("/contact", async (req,res)=>{
    try {
        const newmsg = Messagefaq({
            fullName : req.body.fullName,
            email : req.body.email,
            mobile : req.body.mobile,
            subject : req.body.subject,
            description : req.body.description
        })
        const received = await newmsg.save();
        res.status(200).render("index")
        console.log(received);
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
