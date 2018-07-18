const express = require("express")
const morgan = require("morgan")
//pour accéder aux données de publication nous devons utiliser body-parser
const bodyParser = require ("body-parser")
//on invoque db.js pour voir si on est bien connecté à mysql
const connection = require("./src/helper/db.js")
//on invoque le fichier movie.js qui correspond à la variable movie
const movie = require("./src/routes/movie.js")

const app = express()

//middleware appliqué à chaque requette
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
//à chaque '/movie' on ira dans le fichier movie.js
app.use("/movie",movie)


// creation d'une route (req recoi res renvoi)
app.get("/", (req, res) =>{
	res.send("Ok, i'm here '/'")
})


app.get("/movie", (req, res) =>{
	res.send("now, i'm here '/movie'")
})



let server = app.listen( process.env.PORT || 3030, () => {
	console.log("listening on port", server.address().port)
})
