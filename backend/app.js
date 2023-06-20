const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routers/product');

mongoose.connect("mongodb+srv://Padam:gueyemalick@atlascluster.ydcxscj.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(()=>console.log("Connexion a la base de donnees reussie"))
    .catch(()=>console.log("Erreur de connexion a la base de donnees"));

const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });



app.use('/products',productRoutes);
  

module.exports = app;