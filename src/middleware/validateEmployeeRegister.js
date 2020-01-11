
import {EmployeeRegisterSchema} from '../helpers/JoiSchemas/EmployeeRegisterSchema'

export const validateEmployeeRegister = async(req, res, next) => {
    try{
        await EmployeeRegisterSchema.validateAsync(req.body)
    }catch(error){
        return res.status(400).send({
            message: "An error occured during validation of submited data",
            Error: error.details[0].message
        })
    }
    next()
}