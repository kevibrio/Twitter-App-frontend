const MensajeCtrl = {};

const Mensaje=require('../modelos/mensajes');
MensajeCtrl.createMessage = async (req,res)=> {
    const {numero,mensaje,titulo,fecha} = req.body;
    fetch('https://graph.facebook.com/v13.0/108457961889212/messages', { 
        method: 'post', 
        headers: new Headers({
            'Authorization': 'Bearer EAAPW5aJVtJkBAPrZAnaK3DjZABe2n9M5pZBc6MXYcXLLZAYBzhCi7zJFHkDCqTtkLKLX0KBhGY1bz3OjEHDHvCeliqmXjWmfZCpNYGU9YP9psS2fIQerYm0dFWlSygWNsod4G1Ajej0dIIwRj8Q9Hu7bS2FICv3BAMAALScVZA29RGDRcG7quaLwCO4D5dTP9WdZCTYOHhkoAZDZD, 
            'Content-Type': 'application/json'
        }), 
        body: 
        `{ "messaging_product": "whatsapp",
         "to": "5930999159011", 
         "type": "template", 
         "template": { 
             "name": "hello_world", 
             "language": 
             { "code": "en_US" } }`
    });
    const Mensaje=new Mensajes();
    Mensaje.numero = numero;
    Mensaje.mensaje = mensaje;
    Mensaje.titulo = titulo;
    Mensaje.fecha = fecha;
    
    const response = await Mensaje.save(err=>{
        if(err){
            return undefined
        }
        return 200
    });
    return res.status(response==undefined?200:response).send({
        STATUS: 'OK',
        MESSAGE: response==undefined?'No se ha podido guardar el mensaje':'Mensaje enviado exitósamente'
    });
}
MensajeCtrl.obtainMessages = async (req, res) => {
};

MensajeCtrl.obtainLastMessageSended = async (req, res) => {
};


module.exports = MensajeCtrl;
