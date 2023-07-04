
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /.*\d+.*/
const validations = (userData) => {
    let errors = {};
    if (!regexEmail.test(userData.email)) {
        errors.email = "El nombre de usuario tiene que ser un email";
    }
    if (userData.email.length === 0) {
        errors.email = "El nombre de usuario no debe estar vacío";
    }
    if (userData.email.length > 35) {
        errors.email = "El nombre de usuario no puede tener mas de 35 caracteres";
    }

    if (!regexPassword.test(userData.password)) {
        errors.password = "La contraseña debe tener al menos un número";
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }


    return errors;
};


export default validations;