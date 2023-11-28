import { useState, ChangeEvent } from 'react';


/**
 * 
 * @param initialState  it is the initial state of the form
 * @returns it returns the form data, the function to handle the input change, the function to reset the form and the function to validate the email 
 */

export const useForm = <T>(initialState:T) => {


    const [formData, setFormData] = useState(initialState)



    /**
     * It is the function to handle the input change
     * @param event it is the event of the input
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    /**
     * It is the function to reset the form
     */
    const reset = () => {
        setFormData({...initialState})
    }


    /**
     * It is the function to validate the email
     * @param email it is the email to validate
     * @returns it returns true if the email is valid, otherwise it returns false
     */
    const isValidEmail = ( email: string ) => {
        console.log('email',email);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const isValid = re.test(String(email).toLowerCase());
        console.log(isValid);

        return isValid;
    }

    return {
        ...formData,
        formData,
        handleInputChange,
        reset,
        isValidEmail
    }

}
