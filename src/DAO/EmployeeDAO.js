import uuidv4 from 'uuid/v4'
import moment from 'moment';
import _ from 'lodash';
import {pool} from '../db/DbConnection';
import {CREATE_EMPLOYEE_TABLE,CREATE_EMPLOYEE,UPDATE_EMPLOYEE_INFO,SUSPEND_EMPLOYEE,ACTIVATE_EMPLOYEE,DELETE_EMPLOYEE} from '../helpers/DBQueries';

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
            new Date,
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
            //ToDo
        }
    }
}
