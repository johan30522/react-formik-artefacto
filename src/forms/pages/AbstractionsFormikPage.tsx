
import { Formik, Form } from "formik";

import { MyTextInput } from '../components';

import * as Yup from 'yup';

import '../styles/styles.css'
/**
 * En este formulario hacemos uso de formik, yup , y formik components
 * ademas se implementa abstracciones mediante componentes personalizados para campos de texto MyTextInput
 * @returns el formulario
 * */

export const AbstractionsFormikPage = () => {

    return (
        <div>
            <div className="row">
                <div className="col-12  ps-5 mt-5">
                    <div className="container-md"></div>

                    <h1>Register Formik</h1>
                    <h2>
                        Uso de Formik, Yup y Formik Components
                    </h2>

                    <Formik
                    // se inicializa el formulario con los valores iniciales
                        initialValues={{
                            name: '',
                            email: '',
                            password: '',
                            confirmPassword: ''
                        }}
                        // se inicializa el esquema de validacion
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('First name is required')
                                .max(15, 'Must be 15 characters or less'),
                            email: Yup.string()
                                .required('Email is required')
                                .email('Invalid email').required('Email is required'),
                            password: Yup.string()
                                .required('Password is required')
                                .min(6, 'Must be 6 characters or more'),
                            confirmPassword: Yup.string()
                                .required('Confirm password is required')
                                .oneOf([Yup.ref('password'), ''], 'Passwords must match')
                        })}
                        // se inicializa el submit del formulario
                        onSubmit={(values, { setSubmitting }) => {
                            // se simula el submit del formulario
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {
                            ({ handleReset }) => (
                                <Form>
                                    <MyTextInput
                                        label="Name"
                                        name="name"
                                        type="text"
                                        placeholder="name"
                                    />
                                    <MyTextInput
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="email"
                                    />
                                    <MyTextInput
                                        label="Password"
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                    />
                                    <MyTextInput
                                        label="Confirm Password"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="confirm password"
                                    />
                                    <button 
                                    type="submit"
                                    className="btn btn-primary"
                                    >Submit</button>
                                    <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={handleReset}>Reset</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        </div>
    )
}
