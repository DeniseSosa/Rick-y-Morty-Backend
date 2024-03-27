
const validationsRegister = (user) => {
    const errors = {};
    if(user.email.length === 0){
        errors.email= "este campo no puede estar vacio"
    }
    if (!/\S+@\S+.\S+/.test(user.email)){
        errors.email = "debe ser un email valido"
    }
    if(user.password.length === 0){
        errors.password= "este campo no puede estar vacio"
    }
    if(user.password.length< 8){
        errors.password = "debe tener mmas de 8 caracteres"
    }
    if(user.password.length > 20){
        errors.password = "debe tener menos de 20 caracteres"
    }
    if (!/\d/.test(user.password) ){
        errors.password= "Debe contener al menos un número"
    }
    return errors
}
export default validationsRegister;
