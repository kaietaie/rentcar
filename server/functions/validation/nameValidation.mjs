const nameValidation =  user_name => {
    const validRegex = /^[a-zA-Z]+$/;
    return user_name.toLowerCase().trim().match(validRegex)
}

export default nameValidation