
import { useFormik } from "formik";


// yup allo
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {



  const submitValues = () => {
    console.log(values);
  }

  const {
    handleSubmit, getFieldProps,
    values, errors, touched
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('First name is required')
        .max(15, 'Must be 15 characters or less'),
      lastName: Yup.string()
        .required('Last name is required')
        .max(20, 'Must be 20 characters or less'),
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email').required('Email is required')
    }),
    onSubmit: submitValues,
  });

  return (
    <div>
      <div className="row">
        <div className="col-12 ps-5 mt-5">

          <div className="container-md"></div>

          <h1>Formik Yup</h1>
          <h2>
            Uso de Formik, con un esquema de validación Yup
          </h2>

          <form
            onSubmit={handleSubmit}
            noValidate

          >

            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              {...getFieldProps('firstName')}
            />
            {
              errors.firstName && touched.firstName && (
                <span>{errors.firstName}</span>
              )
            }
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              {...getFieldProps('lastName')}
            />
            {
              errors.lastName && touched.lastName && (
                <span>{errors.lastName}</span>
              )
            }


            <label htmlFor="email">Email</label>
            <input

              type="email"
              placeholder="Email"
              className="form-control"
              {...getFieldProps('email')}
            />
            {
              errors.email && touched.email && (
                <span>{errors.email}</span>
              )
            }
            <button
              type="submit"
              className="btn btn-primary"
            >Registro</button>

          </form>


        </div>
      </div>
    </div>
  )
}
