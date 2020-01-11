import joi from '@hapi/joi';
import {StringRegex, PasswordRegex, EmailRegex, PhoneNumberRegex, NationalIdRegex} from '../regex';

export const ManagerSignupSchema = {
    name : joi.string().required().regex(StringRegex),
    nationalId: joi.string().required().max(15).regex(NationalIdRegex),
    phoneNumber: joi.string().required().max(13).regex(PhoneNumberRegex),
    email: joi.string().required().email().regex(EmailRegex),
    dateofBirth: joi.date().required(),
    status: joi.string().required().regex(StringRegex),
    postion: joi.string().required().regex(StringRegex),
};