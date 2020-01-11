import Joi from '@hapi/joi'
import {StringRegex, EmailRegex,PhoneNumberRegex, NationalIdRegex} from '../regex';

const EmployeeRegisterSchema = Joi.object().keys({
    empname: Joi.string().required().max(50).regex(StringRegex),
    nationalid: Joi.string().required().max(16).regex(NationalIdRegex),
    phonenumber: Joi.string().required().max(13).regex(PhoneNumberRegex),
    email: Joi.string().required().email().regex(EmailRegex),
    dob: Joi.date(),
    status: Joi.string().required().regex(StringRegex),
    postion: Joi.string().required().regex(StringRegex)
})

export{EmployeeRegisterSchema} ;