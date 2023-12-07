import { useState, ChangeEvent, MouseEvent } from 'react';

import { useForm } from '../hooks/useForm';
import '../styles/styles.css'


/**
 *  Formulario con manjeo de estado useForm basico
 * @returns el formulario con useForm
 */
export const RegisterPage = () => {



    /**
     * Permite manjear el estado del formulario
    */
    const { formData, handleInputChange, reset, isValidEmail, name, email, confirmPassword, password } = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    /**
     * Permite hacer submit los valores del formulario
     * @param event
     *  */
    const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <div className="row">
                <div className="col-12 ps-5 mt-5">

                    <div className="container-md">

                        <h1>Register Page</h1>
                        <h2>
                            Uso de useForm y validaciones basicas con un hook personalizado
                        </h2>

                        <form noValidate>
                            <input
                                type="text"
                                placeholder="name"
                                value={name}
                                name="name"
                                onChange={(event) => handleInputChange(event)}
                                className={name.trim().length <= 0 ? 'form-control has-error' : 'form-control'}

                            />
                            {name.trim().length <= 0 && <span>este campo es necesario</span>}

                            <input
                                type="text"
                                placeholder="email"
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                className={!isValidEmail(email) ? 'form-control has-error' : 'form-control '}
                            />

                            {!isValidEmail(email) && <span>este campo es necesario</span>}



                            <input
                                type="password"
                                placeholder="password"
                                value={password}
                                name="password"
                                onChange={handleInputChange}
                                className={password.trim().length <= 0 ? 'form-control has-error' : 'form-control '}
                            />
                            {password.trim().length <= 0 && <span>este campo es necesario</span>}
                            {password.trim().length < 6 && password.trim().length > 0 && <span>la contraseña debe tener 6 caracteres</span>}




                            <input
                                type="password"
                                placeholder="confirm password"
                                value={confirmPassword}
                                name="confirmPassword"
                                onChange={handleInputChange}
                                className={confirmPassword.trim().length <= 0 ? 'form-control has-error' : 'form-control '}
                            />
                            {confirmPassword.trim().length <= 0 && <span>este campo es necesario</span>}
                            {confirmPassword !== password && <span>las contraseñas no coinciden</span>}




                            <button
                                className='btn btn-primary'
                                type='button'
                                onClick={(event) => handleSubmit(event)}
                            >Register</button>

                            <button
                                className='btn btn-primary'
                                type='button'
                                onClick={reset}
                            >Reset</button>


                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}
