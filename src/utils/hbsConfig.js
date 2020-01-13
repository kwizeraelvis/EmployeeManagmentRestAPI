import hbs from 'nodemailer-express-handlebars';
import ehbs from 'express-handlebars';
import {viewDir, partialsDir, layoutsDir} from '../helpers/DataPath'

const HandleBarsConfig = {
    viewEngine: {
        extName: '.hbs',
        partialsDir: partialsDir,
        layoutsDir: layoutsDir,
        defaultLayout: 'main'
    },
    viewPath: viewDir,
    extName: '.hbs'
}


export {HandleBarsConfig}