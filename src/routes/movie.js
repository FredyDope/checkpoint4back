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
})

Router.get('/movielist/:id', (req, res) => {
	console.log("req PARAMS", req.params.id) 
	const sql =`SELECT * FROM movieDetail WHERE id = ?`
	const value = [ req.params.id ]
	connection.query(sql, value, (err, result) => {
		if(err) throw err
		return res.status(200).send(result)
	} )
} )

Router.post('/addmovie', (req, res) => {
	//affiche les datat recu dans le body analuser par bodyparser
	console.log("req BODY", req.body)
	//requete sql pour ajouter de la data 
	const sql = "INSERT INTO movieDetail (Titre, Sortie, Genre, Synopsys, Affiche) VALUES (?,?,?,?,?)"
	const value = [req.body.Titre, req.body.Sortie, req.body.Genre, req.body.Synopsys, req.body.Affiche ]
	connection.query(sql, value)
    .then(result => {
      console.log(result)
      res.status(200).json({ flash:  "Film Ajouter!!" });
    })
    .catch(err => {
      res.status(500).json({ flash:  err.message });
    })
} )

Router.put('/updatemovie/:id', (req, res) => {
	console.log("req BODY", req.body)
	console.log("req PARAMS", req.params)
	const sql = `UPDATE movieDetail SET Titre = ?, Sortie = ?, Genre = ?, Synopsys = ?, Affiche = ? WHERE id = ?`
	const value = [req.body.Titre, req.body.Sortie, req.body.Genre, req.body.Synopsys, req.body.Affiche, req.params.id ]
	connection.query(sql, value, (err, result) => {
		if(err) throw err
		return res.status(200).send(result)
	} )
} )

Router.delete('/lessmovie/:id', (req, res) => {
	console.log("req PARAMS", req.params)
	const sql = `DELETE FROM movieDetail WHERE id = ?`
	const value = [ req.params.id ]
	connection.query(sql, value, (err, result) => {
		if(err) throw err
		return res.status(200).send(result)
	} )
} )


module.exports = Router 