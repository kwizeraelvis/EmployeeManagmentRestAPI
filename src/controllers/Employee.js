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
      return res.status(400).send(error);
    }
  }
}
