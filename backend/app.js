//appeler express
const express = require('express');
// créer la const app et appeler express
const app = express();
// intercepte toutes les requetes au format JSON
app.use(express.json());
//appeler mongoose
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')

// connecter mongoose
mongoose.connect('mongodb+srv://Sombrebarman:Azer789@cluster0.gfhyt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
next();
});

app.use("/api/auth/",userRoutes)



module.exports = app