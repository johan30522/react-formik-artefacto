
import { Formik, Form } from "formik";

import { MyTextInput, MySelect } from '../components';

// archivo json que contiene la estructura del formulario, esto podria venir de un servicio de backend
import formJson from '../data/custom-form.json';

import * as Yup from 'yup';

//define los valores iniciales del formulario
const initialValues: { [key: string]: any } = {};
//define los campos requeridos del formulario
const requiredFields: { [key: string]: any } = {};

formJson.forEach(({ name, value, validations }) => {
  // se inicializan los valores iniciales del formulario
  initialValues[name] = value;

  let schemaString = Yup.string();
  let schemaNumber = Yup.number();

  // se recorren las validaciones del formulario
  validations.forEach(({ type, message, value }) => {
    if (type === 'required') {
      schemaString = schemaString.required(message);
    }
    if (type === 'email') {
      schemaString = schemaString.email(message);
    }
    if (type === 'minLength') {
      if (typeof value === 'number') {
        schemaString = schemaString.min(value, message);
      }
    }
    if (type === 'maxLength') {
      if (typeof value === 'number') {
        schemaString = schemaString.max(value, message);
      }
    }
    if (type === 'number') {
      schemaNumber = schemaNumber.typeError(message);
    }
    if (type === 'oneOf') {
      if (Array.isArray(value)) {
        schemaString = schemaString.oneOf(value, message);
      }
    }
    if (type === 'pattern') {
      if (typeof value === 'string') {
        const regex = new RegExp(value);
        schemaString = schemaString.matches(regex, message);
      }
    }
    requiredFields[name] = schemaString;
  })
})

// se inicializa el esquema de validacion
const validationSchema = Yup.object({ ...requiredFields });


export const DinamicForm = () => {


  return (
    <div>
      <div className="row">
        <div className="col-12 ps-5 mt-5">

          <div className="container-md"></div>
          <h1>Formulario Dinamico</h1>
          <h2>
            Se contruye a traves de un archivo JSON
          </h2>


          <Formik
          // se inicializa el formulario con los valores iniciales
            initialValues={initialValues}
            // se inicializa el esquema de validacion
            validationSchema={validationSchema}
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
                <Form noValidate>
                  {
                    formJson.map(({ label, name, placeholder, type, options }, index) => {
                      return (

                        <>
                          {
                            (type === 'input' || type === 'email' || type === 'password') &&
                            (
                              <MyTextInput
                                key={index}
                                label={label}
                                name={name}
                                type={(type as 'text' | 'email' | 'password')}
                                placeholder={placeholder || ''}
                              />
                            )
                          }

                          {
                            (type === 'select') &&
                            (
                              <MySelect
                                key={index}
                                label={label}
                                name={name}
                              >
                                {
                                  options?.map(({ value, label }, index) => (
                                    <option key={index} value={value}>{label}</option>
                                  ))
                                }

                              </MySelect>
                            )
                          }


                        </>

                      )
                    })
                  }
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >Enviar</button>

                </Form>
              )
            }


          </Formik>

        </div >
      </div >
    </div >

  )
}
