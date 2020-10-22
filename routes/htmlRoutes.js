const express = require("express")


const path = require("path")
module.exports = function(app){
    const app = express

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/submit", function(req,res){
        res.sendFile(path.join(__dirname, "../public/submit-joke.html"))
    })
}
