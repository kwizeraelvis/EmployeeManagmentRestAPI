export const StringRegex = /^[a-zA-Z\s]{0,50}$/;
export const  EmailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;
export const PhoneNumberRegex = /^\+250[2,3,7,8]{2}[0-9]{7}$/;
export const NationalIdRegex = /^1[0-9]{4}[8,7][0-9]{7}[0][0-9]{2}$/
