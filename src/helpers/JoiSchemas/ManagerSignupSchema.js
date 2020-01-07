import joi from '@hapi/joi';
import {StringRegex, PasswordRegex, EmailRegex} from './regex';

export const ManagerSignupSchema = {
    name : joi.string().required().regex(StringRegex),
    nationalId: joi.string().required().max(15).regex(StringRegex),
    phoneNumber: joi.string().required().max(12),
    email: joi.string().required().email().regex(EmailRegex),
    dateofBirth: joi.date().required(),
    status: joi.string().required().regex(StringRegex),
    postion: joi.string().required().regex(StringRegex),
    password: joi.string().regex(PasswordRegex)
};