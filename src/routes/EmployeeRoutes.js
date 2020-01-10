import express from 'express';
import Employee from '../controllers/Employee';
import CheckEmployeeId from '../middleware/CheckEmployeeId';
import CheckFileExtension from '../middleware/CheckFileExtension'
import XlsxToJson from '../middleware/XlsxToJson'
import multerUpload from '../utils/multerConfig'

const EmployeeRoutes = express.Router();

EmployeeRoutes.post('/employees', Employee.createNewEmployee);
EmployeeRoutes.put('/employees/:id',CheckEmployeeId,Employee.updateRegisteredEmployee);
EmployeeRoutes.get('/employees/list', Employee.viewAllEmployees);
EmployeeRoutes.get('/employees/:id', Employee.viewEmployeeById);
EmployeeRoutes.delete('/employees/:id', Employee.deleteEmployee);
EmployeeRoutes.put('/employees/:id/activate', Employee.employeeActivate)
EmployeeRoutes.put('/employees/:id/suspend', Employee.suspendEmployee)
EmployeeRoutes.get('/file', Employee.renderUploadPage)
EmployeeRoutes.post('/batchcreate', multerUpload.single('dataFile'), XlsxToJson)

export default EmployeeRoutes;
