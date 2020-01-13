import xlsx from 'xlsx';
import EmployeeDAO from '../DAO/EmployeeDAO'
import {EmployeeRegisterSchema} from '../helpers/JoiSchemas/EmployeeRegisterSchema';

const XlsxToJson = (req, res, next) => {
    const upfile = xlsx.readFile(req.file.path,{cellDates: true});
    const workSheet = upfile.Sheets['Sheet1']
    const records = xlsx.utils.sheet_to_json(workSheet)
    const employees = records.map((record) => {
        return record;
    })
    employees.forEach(async (employee) => {
        try{
            await EmployeeRegisterSchema.validateAsync(employee);
            await EmployeeDAO.createEmployee(employee);
        }catch(error){
            return res.status(400).send({
                message: "An error occured while processing your requested operation",
                Error: error
            })
        }
    })
    res.status(201).send({
        message: "The employees were succesfully created",
        EmployeeData: employees
    })
}

export default XlsxToJson