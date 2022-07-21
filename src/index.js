require('dotenv').config();
const express = require('express');
const path    = require('path');
const method_override = require('method-override');
const flash = require('connect-flash');
const cors = require('cors');
const bodyParser = require('body-parser');
//const logger = require('morgan');


//inicializadores
const app = express();



const mongoose = require('mongoose');

const {HOST, PASS, DB} = process.env;

const URI = 'mongodb+srv://whatsapp:whatsapp@cluster0.lagnk.mongodb.net/?retryWrites=true&w=majority';

//configuraciones
app.set('port', process.env.PORT || 4000);


//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({
    limit: '200mb'
  }));
app.use(method_override('_method'));
app.use(cors());
//app.use(logger('dev'));



//rutas
app.use(require('./routes/mensajes.routes'));



mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(db => console.log('Base de datos esta conectado'))
.catch(err => console.log(err));


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

