const express=require("express");
const app=express()
const path=require("path")
app.use(express.static("public"))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/login",(req,res) =>{
  res.render("login");
})
app.get("/register",(req,res) =>{
    res.render("register");
})
app.get("/home",(req,res)=>{
    res.render("home");
})
app.get("/history",(req,res)=>{
    res.render("history");
})
app.listen(process.env.PORT || 4000, () => {
    console.log("server stated");
})

