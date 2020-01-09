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
        message: "An error occured while creating the employee",
        Error:{
          error
        }
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
      message: "An error occuresd while updating the employee record",
      Error : {
        error
      }
    })
    }
  }
}
