export function validationRegister(values) {
    let errors = {};
    
    if (!values.firstName.trim()) {
        errors.firstName = 'First Name required';
    } else if (values.firstName.length < 3) {
        errors.firstName = 'First Name needs to be 3 characters or more';
    }
    if (!values.lastName.trim()) {
        errors.lastName = 'Last Name required';
    } else if (values.lastName.length < 3) {
        errors.lastName = 'Last Name needs to be 3 characters or more';
    }
    if (!values.username.trim()) {
        errors.username = 'Username required';
    } else if (values.username.length < 5 && values.username.length > 12) {
        errors.username = 'Username must be between 5 to 12 characters';
    }
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6 && values.password.length > 16) {
        errors.password = 'Password must be between 6 to 16 characters';
    }
    if (!values.password2) {
        errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }
return errors;
}