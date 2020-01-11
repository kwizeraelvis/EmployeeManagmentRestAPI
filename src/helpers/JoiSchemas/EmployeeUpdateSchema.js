import Joi from '@hapi/joi';
import {StringRegex, PhoneNumberRegex, NationalIdRegex, EmailRegex} from '../regex'

const EmployeeUpdateSchema = Joi.object().keys({
    empname: Joi.string().max(50).regex(StringRegex).optional(),
    nationalid: Joi.string().max(16).regex(NationalIdRegex).optional(),
    phonenumber: Joi.string().max(13).regex(PhoneNumberRegex).optional(),
    email: Joi.string().email().regex(EmailRegex).optional(),
    dob: Joi.date().optional(),
    postion: Joi.string().regex(StringRegex).optional()
})

export {EmployeeUpdateSchema}