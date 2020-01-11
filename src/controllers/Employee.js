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
  async viewEmployeeById(req, res){
    try {
    const EmployeeRecord = await EmployeeDAO.getEmployeeById(req.params.id);
    return res.status(200).send({
      message: "Employee was found",
      EmployeeRecord
    })
    } catch (error) {
    return res.status(400).send({
      message:"An error occured while performing the requested operation.More Details Below",
      Error: error
    })
    }
  }
  async deleteEmployee(req,res){
    try{
      const deletedEmployee = await EmployeeDAO.removeEmployee(req.params.id);
      return res.status(200).send({
        message: "Employee was succesfully deleted",
        DeletedEmloyee : {
          EmployeeId: deletedEmployee.id,
          EmployeeName: deletedEmployee.empname
        }
      })
    }catch(error){
      return res.status(400).send({
        message:"An error occured while performing the requested operation.More Details Below",
        Error: error
      })
    }
  }

  async employeeActivate(req, res){
    try {
      const activatedEmployee = await EmployeeDAO.activateEmployee(req.params.id);
      return res.status(200).send({
        message: "The Employee was succesfully activated",
        ActivatedEmployeeProfile: {
          EmployeeId: activatedEmployee.id,
          EmployeeName: activatedEmployee.empname,
          EmployeeStatus: activatedEmployee.status
        }
      })
    } catch (error) {
      return res.status(400).send({
        message:"An error occured while performing the requested operation.More Details Below",
        Error: error
      })
      }
    }
    async suspendEmployee(req, res){
      try{
        const suspendedEmployee = await EmployeeDAO.suspendEmployee(req.params.id);
        return res.status(200).send({
          message: "The Employee was suspended",
          SuspendedEmployeeProfile:{
            EmployeeId:suspendedEmployee.id,
            EmployeeName:suspendedEmployee.empname,
            EmployeeStatus:suspendedEmployee.status
          }
        })
      }catch(error){
        return res.status(400).send({
          message:"An error occured while performing the requested operation.More Details Below",
          Error: error
        })
      }
    }
    renderUploadPage(req,res){
      res.render('index', {layout: false});
    }
    async searchEmployee(req, res){
      try{
        const employee = await EmployeeDAO.searchEmployee(req);
        return res.status(200).send({
          message: "Employee was successfully found",
          Employee: employee
        })
      }catch(error){
        return res.status(400).send({
          message: "An error occured while performing the requested operation",
          Error: error
        })
      }
    }
}
