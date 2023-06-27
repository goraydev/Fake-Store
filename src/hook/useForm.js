import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const setFileInputValue = (name, file) => {
        setFormState({
            ...formState,
            [name]: file,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };
    return {
        ...formState,
        formState,
        setFileInputValue,
        onInputChange,
        onResetForm,
    };
};