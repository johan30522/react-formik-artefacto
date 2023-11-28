
import { useFormik, FormikErrors } from "formik";


import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}





export const FormikBasicPage = () => {

  const validate = (values: FormValues) => {


    const errors: FormikErrors<FormValues> = {};


    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const submitValues = () => {
    console.log(values);
  }

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validate: validate,
    onSubmit: submitValues,
  });



  return (
    <div>
      <div className="row">
        <div className="col-12  ps-5 mt-5">
          <div className="container-md">

            <h1>Formik Básico</h1>

            <form
              onSubmit={handleSubmit}
              noValidate
            >

              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={values.firstName}
                autoComplete="off"
                onBlur={handleBlur}
                className="form-control"


              />
              {
                errors.firstName && touched.firstName && (
                  <span>{errors.firstName}</span>
                )
              }



              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lastName}
                autoComplete="off"
                onBlur={handleBlur}
                className="form-control"

              />
              {
                errors.lastName && touched.lastName && (
                  <span>{errors.lastName}</span>
                )
              }


              <label htmlFor="email">Email</label>
              <input

                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
                autoComplete="off"
                onBlur={handleBlur}
                className="form-control"

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


    </div>
  )
}
