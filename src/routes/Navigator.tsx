import { BrowserRouter } from "react-router-dom";

import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import { Abstractions2FormikPage, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, AbstractionsFormikPage, DinamicForm } from "../forms/pages";

import logo from "../logo-de-GBM.svg";
import '../forms/styles/styles.css';  
import { Formik } from 'formik';

export const Navigator = () => {
  return (
    <BrowserRouter>

      <div className="main-layout">
        <nav>
        <hr />
          <img src={logo} alt="Rect logo" />
          <hr />
          <ul
            className="list-group d-flex flex-column mb-3"
          >
            <li className="w-100"><NavLink to="/register" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Sin Formik</NavLink></li>
            <li className="w-100"><NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Formik Básico</NavLink></li>
            <li className="w-100"><NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Formik Yup</NavLink></li>
            <li className="w-100"><NavLink to="/abstraction-form1" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Formik, Abstraccion 1</NavLink></li>
            <li className="w-100"><NavLink to="/abstraction-form2" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Formik Abstraccion 2</NavLink></li>
            <li className="w-100"><NavLink to="/formik-component" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Formik Components</NavLink></li>
            <li className="w-100"><NavLink to="/dinamic-forms" className={({ isActive }) => isActive ? 'list-group-item nav-active' : ''}>Formulario Dinamico con Formik</NavLink></li>
          </ul>
        </nav>
        <Routes>

          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-component" element={<FormikComponents />} />
          <Route path="/abstraction-form1" element={<AbstractionsFormikPage />} />
          <Route path="/abstraction-form2" element={<Abstractions2FormikPage />} />
          <Route path="/dinamic-forms" element={<DinamicForm />} />
          <Route path="/" element={<h1>Demo de formularios</h1>} />
          <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
      </div>

    </BrowserRouter>
  )
}