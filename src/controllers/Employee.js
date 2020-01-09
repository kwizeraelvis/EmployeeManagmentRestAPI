import lodash from "lodash";
import EmployeeDAO from "../DAO/EmployeeDAO";


export default new class Employee {
  async createNewEmployee(req, res) {
    try {
      const employeeData = await EmployeeDAO.createEmployee(req.body);
      return res.status(201).send({
        message: "The employee was succesfully updated",
        EmployeeData: {
          EmployeeId: employeeData.id,
          EmployeeName: employeeData.empname,
          EmployeePhoneNumber: employeeData.phonenumber,
          EmployeeEmail: employeeData.email,
          EmployeeDateOfBirth: employeeData.dob,
          EmployeePostion: employeeData.position
        }
      });
    } catch (error) {
      console.log(error)
      return res.status(400).send({
        message: "An error occured while performing the requested operation.More Details Below",
        Error:error
      });
    }
  }

  async updateRegisteredEmployee(req, res){
    try {
    const UpdatedInfo = await EmployeeDAO.updateEmployee(req.property, req);
    return res.status(200).send({
      message: "The employee was updated",
      NewEmployeeInfo: {
        UpdatedInfo
      }
    })
    } catch (error) {
    return res.status(404).send({
      message: "An error occured while performing the requested operation.More Details Below",
      Error : error
    })
    }
  }

  async viewAllEmployees(req, res){
    try {
      const employees = await EmployeeDAO.getAllEmployees();
      return res.status(200).send({
        message: "List of all Employees",
        employees
      })
    } catch (error) {
    return res.status(400).send({
      message:"An error occured while performing the requested operation.More Details Below",
      Error: error
    })
    }
  }
}
