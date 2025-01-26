const express = require("express");
const mysql = require("../data/dbManager");
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("login");
})
router.get("/takimim",(req,res)=>{
    res.render("takimim");
})
router.get("/transfer-listesi",(req,res)=>{
    res.render("transfer_listesi");
})
router.get("/transfer-verileri",(req,res)=>{
    res.render("transfer_verileri");
})
router.post('/login', (req, res) => {
    const { username, password } = req.body; 
    
    if (username == 'yetkili' && password == 'sifre123') {
      res.redirect("/takimim")
    }
    res.redirect("/");
  });
module.exports=router;