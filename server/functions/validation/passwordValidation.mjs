const passwordValidation =  user_pass => {
    const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return user_pass.match(validRegex)
}

export default passwordValidation