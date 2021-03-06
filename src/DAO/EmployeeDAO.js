import uuidv4 from 'uuid/v4';
import _ from 'lodash';
import {pool} from '../db/DbConnection';
import {CREATE_EMPLOYEE_TABLE,CREATE_EMPLOYEE,UPDATE_EMPLOYEE_INFO,SUSPEND_EMPLOYEE,ACTIVATE_EMPLOYEE,DELETE_EMPLOYEE, GET_ALL_EMPLOYEES, GET_EMPLOYEE_BY_ID} from '../helpers/DBQueries';
import SendRegistrationEmail from '../utils/sendRegistrationEmail'
export default new class EmployeeDAO{
    async init(){
        await pool.query(CREATE_EMPLOYEE_TABLE);
    }
    async createEmployee(data){
        const newEmployee = [
            uuidv4(),
            data.empname,
            data.nationalid,
            data.email,
            data.phonenumber,
            data.dob || new Date,
            new Date,
            data.status,
            data.postion
        ]
        try{
            const {rows} = await pool.query(CREATE_EMPLOYEE, newEmployee);
            if(rows == null){
                throw new Error("unable to register employee");
            }
            return rows[0];
        }catch(e){
            console.log(e);
        }finally{
            SendRegistrationEmail.sendEmail(data.email, data.empname);
        }
    }
    async updateEmployee(data, req){
        try {
            const values = [
                req.body.empname || data.empname,
                req.body.nationalid || data.nationalid,
                req.body.email || data.email,
                req.body.phonenumber || data.phonenumber,
                req.body.dob || data.dob,
                new Date,
                req.body.postion || data.postion,
                req.params.id
            ];
            const {rows: updatedEmployee} = await pool.query(UPDATE_EMPLOYEE_INFO, values);
            return updatedEmployee;
            }
        catch (error) {
        console.log(error)
        return error;
        }
    }
    async getAllEmployees(){
        try{
            const {rows: allEmployees} = await pool.query(GET_ALL_EMPLOYEES);
            return allEmployees;
        }catch(error){
            console.log(error)
            return error;
        }
    }
    async getEmployeeById(id){
        try{
            const {rows: EmployeeById} = await pool.query(GET_EMPLOYEE_BY_ID, [id])
            return EmployeeById;
        }catch(error){
            console.log(error);
            return error;
        }
    }
    async removeEmployee(id){
        try{
           const {rows} = await pool.query(DELETE_EMPLOYEE, [id]);
           if(rows == null){
               throw new Error('Unable to find employee')
           }
           return rows[0];
        }catch(error){
            console.log(error)
            return error;
        }
    }
    async activateEmployee(id){
        try {
            const data = {
                status: "active",
                modifiedOn: new Date
            }
            const {rows: activatedEmployee} = await pool.query(ACTIVATE_EMPLOYEE, [data.status, data.modifiedOn, id])
            if(activatedEmployee == null){
                throw new Error("Employee was not found")
            }
            return activatedEmployee[0];
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    async suspendEmployee(id){
        try {
            const data = {
                status: "inactive",
                modifiedOn: new  Date
            }
            const {rows: suspendedEmployee} = await pool.query(SUSPEND_EMPLOYEE, [data.status, data.modifiedOn, id]);
            if(suspendedEmployee == null){throw new Error('Employee was not found')}
            return suspendedEmployee[0];
        } catch (error) {
            console.log(error)
            return error
        }
    }
    async searchEmployee(req){
        try {
        const key = Object.keys(req.body)
        const value = req.body[`${key}`]
        const {rows:searchedEmployee} = await pool.query(`select * from employees where ${key} = '${value}'`)
        return searchedEmployee
        } catch (error) {
            console.log(error)
        }
    }
}
