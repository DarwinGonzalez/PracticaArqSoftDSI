
import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Pelicula = new Schema({
    nombre: 	{ type: String },
    director: 	{ type: String },
    genero: 	{ type: String },
    puntuacion: { type: Number},
    estreno:    { type: Date},
    duracion:   {type: Number}

});


module.exports = mongoose.model('Pelicula', Pelicula);