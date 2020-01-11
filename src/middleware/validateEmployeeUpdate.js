import {EmployeeUpdateSchema} from '../helpers/JoiSchemas/EmployeeUpdateSchema'

const validateEmployeeUpdate = async (req, res, next) => {
    try {
        await EmployeeUpdateSchema.validateAsync(req.body)
    } catch (error) {
        return res.status(400).send({
            message: "An error occured during validation of data",
            error: error.details[0].message
        })
    }
    next()
}

export{ validateEmployeeUpdate}