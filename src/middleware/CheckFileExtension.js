import path from 'path';
import {uploadDir} from '../helpers/DataPath'

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @deprecated Middleware is deprecated in favor of multer which will take over
 * the function of uploading, checking file extension, overrall managing of
 * the diskStorage 
 */
const CheckFileExtension = (req, res,next) => {
    let data = req.files.dataFile;
    let name = data.name.split('.');
    let index = 0 ;
    if(name[1] != 'xlsx'){
        return res.status(400).send({
            Error: 'Invalid File type'
        })
    }
    res.status(200).send({
        message: "File was succesfully uploaded"
    })
    next();
}

export default CheckFileExtension