import { useState, useEffect } from 'react';

const useForm = (initialValues, validate, submit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submit();
        }
        setIsSubmitting(false)
    },
        [errors]
    );

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        const errorValidate = validate(values);
        setErrors(errorValidate);
        setIsSubmitting(true);
    };

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;