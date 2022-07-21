const {Schema, model} = require('mongoose');

 const MessageSchema = new Schema({
    numero:     {type: String, required: true},
    mensaje:{type: String, required: true},
    titulo:        {type: String, required: true},
    fecha:      {type: String, required: true},
});

module.exports = model('Mensajes',MessageSchema);