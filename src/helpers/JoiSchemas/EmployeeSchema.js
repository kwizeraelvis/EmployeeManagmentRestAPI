import joi from '@hapi/joi';
import {StringRegex, EmailRegex} from './regex';

export const EmployeeSchema = {
    name: joi.string().required().max(50).regex(StringRegex),
    nationalId: joi.string().required().max(15),
    phoneNumber: joi.string().required().max(12),
    email: joi.string().required().email().regex(EmailRegex),
    dateOfBirth: joi.date().required(),
    status: joi.string().required().regex(StringRegex,),
    postion: joi.string().required().regex(StringRegex)
};