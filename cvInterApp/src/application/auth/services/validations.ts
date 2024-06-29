
export const validateInputErrors= (name: string, value:string) => {
    switch(name){
        case "name": 
            return value ? "" : "Name is required.";
        
        case "email": 
            return /\S+@\S+\.\S+/.test(value) ? '' : 'Email is invalid';
        
        case "password": 
            return value.length >= 6 ? '' : 'Password must be at least 6 characters';
        
        default: 
            return ""
    }
}

export const loginValidations = (name: string, value: string) => {

    switch(name) {
        case "email":
            return value ? "" : "Ingrese su email.";
        case "password":
            return value ? "" : "Ingrese su contraseña."

        default:
            return ""
    }
}