
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";

import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents
  = () => {

    return (
      <div>
        <div className="row">
          <div className="col-12  ps-5 mt-5">

            <div className="container-md"></div>

            <h1>Formik Component</h1>
            <h2>
              Uso de Formik, Yup y Formik Components
            </h2>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',

              }}
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
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {
                (formik) => (
                  <Form>
                    <label htmlFor="firstName">First Name1</label>
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      classname="form-control"
                    />
                    <ErrorMessage name="firstName" component="span" />
                    <label htmlFor="lastName">Last Name1</label>
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      classname="form-control"
                    />
                    <ErrorMessage name="lastName" component="span" />
                    <label htmlFor="email">Email1</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email"
                      classname="form-control"
                    />
                    <ErrorMessage name="email" component="span" />
                    <label htmlFor="jobType">Job Type1</label>

                    <Field
                      name="jobType"
                      as="select"
                      classname="form-control"
                    >
                      <option value="">Select a job type</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                      <option value="other">Other</option>
                    </Field>
                    <ErrorMessage name="jobType" component="span" />

                    <label htmlFor="terms">
                      <Field
                        name="terms"
                        type="checkbox"
                        clasname="form-check-input"
                      />
                      Terms an Conditions
                    </label>
                    <ErrorMessage name="terms" component="span" />
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
