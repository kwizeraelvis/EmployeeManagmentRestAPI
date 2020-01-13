import path from 'path';

const publicDir = path.join(__dirname, '../../public/css');
const uploadDir = path.join(__dirname, '../../uploads/');
const viewDir = path.join(__dirname, '../../templates/views');
const partialsDir = path.join(__dirname, '../../templates/partials');
const layoutsDir = path.join(__dirname, '../../templates/layouts')

export {
    publicDir,
    viewDir,
    uploadDir,
    partialsDir,
    layoutsDir
}