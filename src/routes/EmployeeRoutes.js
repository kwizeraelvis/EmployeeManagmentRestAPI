import express from 'express';
import Employee from '../controllers/Employee';


const EmployeeRoutes = express.Router();

EmployeeRoutes.post('/employees', Employee.createNewEmployee);


export default EmployeeRoutes;