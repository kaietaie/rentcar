const phoneValidation =  phone => {
    const validRegex = /^\+?([0-9]{3})\)?[-. ]?([0-9]{9})$/;
    return phone.trim().match(validRegex)
}

export default phoneValidation

