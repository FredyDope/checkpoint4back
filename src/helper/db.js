const mysql = require ("mysql2")
//on se connecte à la base de données
const connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"mysql",
	database:"movies"
})

connection.connect(err => {
	if (err) throw err
	console.log("Connected!!!")
})

module.exports = connection