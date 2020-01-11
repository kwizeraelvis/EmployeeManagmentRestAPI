export const validateAge = (req, res, next) => {
    const today = new Date();
    const birthdate = new Date(req.body.dob);
    const age = today.getFullYear - birthdate.getFullYear;
    const m = today.getMonth - birthdate.getMonth;
    if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--}
    if(age < 18){
        return res.status(400).send({
            message: "The employee to be registered is under 18"
        })
    }
    next()
}