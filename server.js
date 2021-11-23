const express = require( 'express' );
const mongoose = require( 'mongoose' );
mongoose.connect('mongodb://localhost/animals_db', {useNewUrlParser: true});
const app = express();

const {AnimalModel} = require( './models/AnimalsModel' );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use( express.urlencoded({extended:true}) );

app.get( '/', function( request, response ){
    AnimalModel
        .getAnimals()
        .then( data => {
            console.log( data );
            response.render( 'index', { users : data } );
        });  
});
