const express = require("express")
const morgan = require("morgan")

const app = express()

//middleware appliqué à chaque requette
app.use(morgan("dev"))

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
