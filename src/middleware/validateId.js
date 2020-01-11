import {IdSchema} from '../helpers/JoiSchemas/GeneralIdSchema';

const validateId = async(req, res, next) => {
    try{
        await IdSchema.validateAsync(req.params);
    }catch(error){
        return res.status(400).send({
            message: `Employee with provided id ${req.params.id} does not exist, Please check the id`
        })
    }
    next()
}

export {validateId}