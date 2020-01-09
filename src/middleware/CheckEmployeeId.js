import {pool} from '../db/DbConnection'
import {GET_EMPLOYEE_BY_ID} from '../helpers/DBQueries';

const CheckEmployeeId = async (req, res, next) => {
    const { rows:employee } = await pool.query(GET_EMPLOYEE_BY_ID, [req.params.id])
    req.property = employee[0];
    next();
}

export default CheckEmployeeId;