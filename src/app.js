import express from 'express';
import fileUpload from 'express-fileupload'
import exphbs from 'express-handlebars'
import EmployeeRoutes from './routes/EmployeeRoutes'
import {publicDir,viewDir} from './helpers/DataPath'

const app = express();


app.engine('.hbs', exphbs({extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('views', viewDir);
app.use(express.static(publicDir))
app.use(fileUpload())

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(EmployeeRoutes);


export default app;