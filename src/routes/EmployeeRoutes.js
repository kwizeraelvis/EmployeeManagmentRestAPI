import express from 'express';
import Employee from '../controllers/Employee';
import CheckEmployeeId from '../middleware/CheckEmployeeId';
import XlsxToJson from '../middleware/XlsxToJson'
import multerUpload from '../utils/multerConfig'
import {validateEmployeeRegister} from '../middleware/validateEmployeeRegister'
import {validateEmployeeUpdate} from '../middleware/validateEmployeeUpdate'
import {validateAge} from '../middleware/validateAge';
import {validateId} from '../middleware/validateId';
const EmployeeRoutes = express.Router();

EmployeeRoutes.post('/employees',validateAge,validateEmployeeRegister,Employee.createNewEmployee);
EmployeeRoutes.put('/employees/:id',validateId,validateAge,CheckEmployeeId, validateEmployeeUpdate,Employee.updateRegisteredEmployee);
EmployeeRoutes.get('/employees/list', Employee.viewAllEmployees);
EmployeeRoutes.get('/employees/:id',validateId, Employee.viewEmployeeById);
EmployeeRoutes.delete('/employees/:id',validateId, Employee.deleteEmployee);
EmployeeRoutes.put('/employees/:id/activate',validateId, Employee.employeeActivate)
EmployeeRoutes.put('/employees/:id/suspend',validateId, Employee.suspendEmployee)
EmployeeRoutes.get('/file', Employee.renderUploadPage)
EmployeeRoutes.post('/batchcreate', multerUpload.single('dataFile'), XlsxToJson)
EmployeeRoutes.post('/employees/search', Employee.searchEmployee)
export default EmployeeRoutes;
