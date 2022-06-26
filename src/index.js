const express = require("express"); 

const bodyParser = require("body-parser");
const contactRouter = require("./routes/contactRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use("/api/contacts", contactRouter);

//Greetings 
app.get("/", (req, res) => { 
    res.send("<center><h2>Welcome to my API services!</h2><h3>By : Irpan Abdul Rahman<h3/></center>"); 
}); 

app.listen(PORT, () => { 
    console.log(`API is listening on localhost:${PORT}`); 
});