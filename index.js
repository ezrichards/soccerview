const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const mongoSanitize = require('express-mongo-sanitize');
const { Player, Team } = require('./models/models');

// TODO: admin panel for adding players + teams

const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/soccerview';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database!")
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(mongoSanitize({ replaceWith: '_' }));

app.get('/', async(req, res) => {
    const players = await Player.find({});
    res.render('home', { players });
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})