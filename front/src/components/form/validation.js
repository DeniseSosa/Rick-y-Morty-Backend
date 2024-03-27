const validation= (userData)=>{
    let errors= {};
    
    if(!userData.email.trim()){
        errors.email= "El nombre de usuario no puede estar vacío"
    }
    if(!/\S+@\S+.\S+/.test(userData.email)){
        errors.email= "El nombre de usuario debe ser un email!"
    }
    if(userData.email.length > 35){
        errors.email= "Debe ser menor a 35 caracteres"
    }
    if(!userData.password.trim()){
        errors.password= "Password no puede estar vacia"
    }
    if (!/\d/.test(userData.password) ){
        errors.password= "Debe contener al menos un número"
    }
    if(userData.password.length < 5 ) {
        errors.password= "Debe contener entre 6 y 10 caracteres"
    } 
    if(userData.password.length > 10) {
        errors.password="Debe contener entre 6 y 10 caracteres"
    }
    return errors
}

export default validation;