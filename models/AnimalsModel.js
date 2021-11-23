const mongoose = require( 'mongoose' );

const AnimalSchema = new mongoose.Schema({
    animalName : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 20
    },
    animalInformation : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 5000
    },
    animalId : {
        type : Number,
        required : true,
        unique : true
    }
});

const Animal = mongoose.model( 'animals', AnimalSchema );

const AnimalModel = {
    insertAnimal : function( newUser ){
        return Animal.create( newUser );
    },
    getAllAnimals : function(){
        return Animal.find();
    },
    getAnimalById : function( animalId ){
        return Animal.findOne({ animalId : animalId });
    },
    updateAnimalInfo : function(animalId, newAnimal){
        return Animal.updateOne({ animalId : animalId }, newAnimal);
    },
    updateAnimalInfo2 : function(animalId, animalName){
        return Animal.db.animals.update({animalId: animalId},{$set:{ animalName : animalName }});
    },
    delete : function( animalId ){
        return Animal.remove({ animalId : animalId });
    }
};

module.exports = {AnimalModel};

