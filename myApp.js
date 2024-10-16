require('dotenv').config()
let express = require('express');
let app = express();


app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res){
 
    res.sendFile(__dirname + "/views/index.html")
   
})

app.get("/json",(req, res) => {
    
console.log(process.env.MESSAGE_STYLE)

if(process.env.MESSAGE_STYLE == 'uppercase'){
    res.json({
        "message": "HELLO JSON"
    })
}else{
    res.json({
        "message": "Hello json"
    })
}
    
}

)


console.log("Hello World")





























 module.exports = app;
