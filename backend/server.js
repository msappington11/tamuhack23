const express = require('express');
const dotenv = require('dotenv')
const path = require('path')
const { Pool } = require('pg')
const { response } = require('express');
const cors = require('cors');

dotenv.config({path: './.env'}) // IDK HOW THIS WORKS WITH HEROKU
const PORT = process.env.PORT || 1111 // this needs to match proxy in front-end package.json
const DATABASE_URL = process.env.DATABASE_URL


// might have to add a start for backend in package.json
    // maybe use nodemon instead of node
        // have to install nodemon

// run "npm run build" on front-end
// copy and paste the contents from front-end/build to back-end/public
    // can then only npm run the server

// start server
const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))

// start database connection
const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
pool.connect()

// start listening
app.listen(PORT, () => console.log('Server on PORT: ' + PORT))

app.get('/*Page', function(req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
        if (err) {
        res.status(500).send(err)
        }
    })
})

app.get('/google', (req, response) => {
    response.json({google: process.env.GOOGLE})
})