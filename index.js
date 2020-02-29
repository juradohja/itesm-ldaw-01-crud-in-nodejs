let express = require('express');
let app = express();

let appRoutes = require('./routes/app');

app.use(express.urlencoded({
    extended: true
}));

app.use('/', appRoutes);

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs'; // .handlebars

let hbs = exphbs.create({extname: extNameHbs});

app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

// Importa la configuración de la app
let appConfig = require('./configs/app');

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
    let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
    console.log(show);
});