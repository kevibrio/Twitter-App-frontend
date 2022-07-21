const {Router} = require('express');
const router = Router();
const { 
    createMessage,obtainMessages,obtainLastMessageSended
} =require('../controladores/mensajes.controler');

    

//USERS MOVIL ROUTES
router.get('/list/messages/all', obtainMessages);
router.post('/list/messages/last',obtainLastMessageSended);
router.post('/lisst/messages/create',createMessage);

module.exports = router;