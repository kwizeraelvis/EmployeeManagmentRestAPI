import path from 'path';

const publicDir = path.join(__dirname, '../../public/css');
const uploadDir = path.join(__dirname, '../../uploads/');
const viewDir = path.join(__dirname, '../templates/views');

export {
    publicDir,
    viewDir,
    uploadDir
}