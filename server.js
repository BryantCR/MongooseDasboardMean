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

app.get( '/', function( request, response ){
    AnimalModel
        .getAnimals()
        .then( data => {
            console.log( data );
            response.render( 'index', { users : data } );
        });  
});

app.post( '/animals/new', function( request, response ){
    console.log( request.body );
    const animalId = Number(request.body.animalId);
    const animalName = request.body.animalName;
    const animalInformation = request.body.animalInformation;

    // Run validations to see if the 'id' is not already in the list
    const newAnimal = {
        animalId,
        animalName,
        animalInformation
    };
    console.log("Data from the form: " + newAnimal );
    AnimalModel
        .createUser( newAnimal )
        .then( result => {
            console.log("Result Catch: " + result );
        })
        .catch( err => {
            console.log( "Something went wrong!" );
            console.log( err );
        })

    response.redirect( '/' );
});

app.listen( 8080, function(){
    console.log( "The users server is running in port 8080." );
});