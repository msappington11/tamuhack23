const express = require('express');
const dotenv = require('dotenv')
const path = require('path')
const { Pool } = require('pg')
const axios = require('axios')
const cors = require('cors')
const fs = require("fs")

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

app.get('/api/search_item/:item', async function(req, res) {
    // search
})

app.get('/api/get_recipes', async function(req, res) {
    // call to db to get recipe IDK
})

// // WALMART SITE TESTING
// const walmartTest = async function(url) {
//     const res = await axios.get(url);
//     return res;
// }
// console.log(walmartTest("https://www.walmart.com/ip/Marketside-Roasted-Red-Pepper-Hummus-10-Oz/110895339?fulfillmentIntent=Pickup"));

fs.readdir("./routes", (err, files) => {
    files.forEach(file => {
        var routeName = file.split(".")[0];
        var router = require(`./routes/${routeName}`);
        app.use(`/${routeName}`, router);
    });
});