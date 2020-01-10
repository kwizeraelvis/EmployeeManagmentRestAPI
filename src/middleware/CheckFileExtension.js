import path from 'path';
import {uploadDir} from '../helpers/DataPath'

const CheckFileExtension = (req, res,next) => {
    let data = req.files.dataFile;
    let name = data.name.split('.');
    if(name[1] != 'xlsx'){
        return res.status(400).send({
            Error: 'Invalid File type'
        })
    }
    let index = 0
    data.mv(path.join(uploadDir, `upload${index++}.xlsx`),(error) => {
        if(error){
            return res.status(500).send({
                message: "An error occured while processing the desired operation",
                Error: error
            })
        }
        return res.status(200).send({
            message: "File was succesfully uploaded"
        })
    })
    next();
}

export default CheckFileExtension