import multer from 'multer'
import {uploadDir} from '../helpers/DataPath'

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir.toString())
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const multerUpload = multer({
    limits:{
        fileSize: 1000000
    },
    filefilter(req, res, file, cb){
        if(!file.originalname.match(/\.(xls|xlsx)$/)){
            return cb(new Error('Please upload an excel file'))
        }
        cb(undefined, true)
    },
    storage: storageConfig
})


export default multerUpload;