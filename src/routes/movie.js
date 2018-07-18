const express = require("express")
// on appelle express puis la fonctionnalité express.router
const Router = express.Router()

Router.get("/movielist", (red, res, next) =>{
	res.send("I'm on GET '/movie/movielist'")
})