import Joi from '@hapi/joi';

const IdSchema = Joi.object().keys({
    id : Joi.string().guid().required()
})

export {IdSchema}