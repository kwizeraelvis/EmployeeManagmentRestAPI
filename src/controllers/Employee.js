import lodash from "lodash";
import EmployeeDAO from "../DAO/EmployeeDAO";


export default new class Employee {
  async createNewEmployee(req, res) {
    try {
      const rows = await EmployeeDAO.createEmployee(req.body);
      return res.status(201).send(rows);
    } catch (error) {
      console.log(error)
      return res.status(400).send(error);
    }
  }
}
