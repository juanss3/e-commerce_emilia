const mongoose = require('mongoose');

const conectarBD = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/tuBaseDeDatos', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión exitosa a MongoDB');
    } catch (error) {
        console.error('Error en la conexión a MongoDB: ', error);
        process.exit(1); // Finaliza la aplicación si no puede conectar
    }
};

module.exports = conectarBD;
