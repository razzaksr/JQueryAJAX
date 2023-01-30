const ex=require("express");
const bdy=require("body-parser");
const pt=require("path");
const { json } = require("express");

const app=ex()

app.use(bdy.urlencoded({extended:true}));
app.use(ex.static("refs"));

app.post("/bson",(rq,rs)=>{
    console.log(`${rq.body.skill} ${rq.body.exp}`)
    rs.json({
        "offer":rq.body.skill,
        "salary":(rq.body.exp>=7&&rq.body.skill=="java")?15000:10000,
        "exp":rq.body.exp
    })
})

// simple post with built in json
app.post("/hey",(rq,rs)=>{
    console.log(`${rq.body.one} ${rq.body.two} ${rq.body.three}`)
})

// simple get mapping with parameters
app.get("/say/:alpha/:beta",(rq,rs)=>{
    console.log(`${rq.params.alpha} and ${rq.params.beta} received`)
})

app.get("/",(rq,rs)=>{
    rs.sendFile(pt.join(__dirname,"index.html"))
})

app.listen(8000,()=>{
    console.log("Server connected")
})