const nameValidation =  user_name => {
    const validRegex = /^\S.*[a-zA-Z\s]{2,20}$/;
    return user_name.toLowerCase().trim().match(validRegex)
}

export default nameValidation