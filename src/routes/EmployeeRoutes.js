import express from 'express';
import Employee from '../controllers/Employee';
import CheckEmployeeId from '../middleware/CheckEmployeeId';

const EmployeeRoutes = express.Router();

EmployeeRoutes.post('/employees', Employee.createNewEmployee);
EmployeeRoutes.put('/employees/:id',CheckEmployeeId,Employee.updateRegisteredEmployee);


export default EmployeeRoutes;