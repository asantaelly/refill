
export const registrationValidation = (name, email, password, passwordConfirmation) => {

    if(!name || !email || !password || !passwordConfirmation){
       throw 'All inputs fields are required!'
    }

    if(name.length < 3)
            throw "Invalid name!"
        
    if(!validateEmail(email))
        throw 'Invalid email. Eg. name@example.com'
    
    if(password.length < 8)
        throw 'Invalid password. Minimum characters is 8.'
    
    if(password !== passwordConfirmation)
        throw 'Your passwords do not match!'

        
    email = email.toLowerCase()
    
    return {
        "name": name, 
        "email": email,
        "password": password,
        "passwordConfirmation": passwordConfirmation
    }
        
}

export const loginValidation = (email, password) => {

    if(!email, !password)
        throw "Email and Password are required";

    if(!validateEmail(email))
        throw 'Invalid email. Eg. name@example.com'

    if(password.length < 8)
        throw 'Invalid password. Minimum characters is 8.'

    email = email.toLowerCase();

    return {
        "email": email,
        "password": password
    }
}

export const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };