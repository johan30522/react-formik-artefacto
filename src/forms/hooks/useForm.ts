import { useState, ChangeEvent } from 'react';


/**
 * 
 * @param initialState  este es el estado inicial del formulario
 * @returns retorna el estado del formulario, la funcion para manejar el cambio de los inputs, la funcion para resetear el formulario y la funcion para validar el email
 */

export const useForm = <T>(initialState:T) => {


    const [formData, setFormData] = useState(initialState)



    /**
     * permite manejar el cambio de los inputs
     * @param event es el evento que se dispara cuando se cambia el valor de un input
     */
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    /**
     * permite resetear el formulario
     */
    const reset = () => {
        setFormData({...initialState})
    }


    /**
     * permite validar el email
     * @param email es el email que se va a validar
     * @returns retorna true si el email es valido y false si no lo es
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
