const express = require("express")
// on appelle express puis la fonctionnalité express.router
const Router = express.Router()
//on se connecte à mysql via db.js
const connection = require("../helper/db.js")

Router.get("/", (red, res) =>{
	res.send("I'm on GET '/movie'")
})

Router.get("/movielist", (red, res) =>{
	//requete sql evec la commande select pour afficher la db
	const sql = "SELECT * FROM movieDetail" 
	//apres si pb de connection on affiche err sinon result
	connection.query(sql, (err, result) =>{
		if (err) throw err
		return res.status(200).send(result)
	})
	//res.send("I'm on GET '/movie/movielist'")
})



module.exports = Router 