
import { Formik, Form } from "formik";
import { MyTextInput, MyCheckbox, MySelect } from '../components';
import * as Yup from 'yup';
import '../styles/styles.css';
/**
 * En este formulario hacemos uso de formik, yup
 * ademas se implementa abstracciones mediante componentes personalizados para campos de texto MyTextInput, MyCheckbox, MySelect
 * @returns el formulario
 * */
export const Abstractions2FormikPage
  = () => {
    return (
      <div>
        <div className="row">
          <div className="col-12  ps-5 mt-5">

            <div className="container-md"></div>

            <h1>Formik Abstractation Tutorial</h1>

            <Formik
            // se inicializa el formulario con los valores iniciales
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',

              }}
              // se inicializa el esquema de validacion
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .required('First name is required')
                  .max(15, 'Must be 15 characters or less'),
                lastName: Yup.string()
                  .required('Last name is required')
                  .max(20, 'Must be 20 characters or less'),
                email: Yup.string()
                  .required('Email is required')
                  .email('Invalid email').required('Email is required'),
                terms: Yup.boolean()
                  .required('Required')
                  .oneOf([true], 'You must accept the terms and conditions.'),
                jobType: Yup.string()
                  .required('Required')
                  .oneOf(
                    ['designer', 'development', 'product', 'other'],
                    'Invalid Job Type'
                  )
                  .notOneOf(['other'], 'Please specify other job type')
                ,
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
                (formik) => (
                  <Form>
                    <MyTextInput
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                    />

                    <MyTextInput
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                    <MyTextInput
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                    />

                    <MySelect
                      label="Job Type"
                      name="jobType"
                    >
                      <option value="">Select a job type</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </MySelect>

                    <MyCheckbox
                      name="terms"
                      label="Terms and Conditions"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >Registro</button>
                  </Form>

                )
              }
            </Formik>
          </div>
        </div>
      </div>
    )
  }
