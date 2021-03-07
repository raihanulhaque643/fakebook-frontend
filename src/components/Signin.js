import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const Signin = ({ setToken, toggleForm }) => {
    const handleSubmit = async (values) => {
      try {
        const response = await axios.post(' https://fakebook-backend-643.herokuapp.com/signin', 
        {
        email: values.email,
        password: values.password
        })
        console.log(response)
        setToken(response.data.token)
      } catch (e) {
        console.log(e)
      }
    }

    return (
        <div className="flex h-screen bg-blue-200">
          <div className="w-full max-w-xs m-auto bg-blue-100 rounded p-5">
            <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Email is required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password) {
             errors.password = 'Password is required'
         }         
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         handleSubmit(values)
       }}
     >
       {({ isSubmitting }) => (
         <Form className="">
           <div className="mb-6">
            <Field type="email" name="email" placeholder="Email" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none"/>
            <ErrorMessage name="email" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="password" name="password" placeholder="Password" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none" />
            <ErrorMessage name="password" component="small" className="text-red-700"/>
           </div>
           <button type="submit" disabled={isSubmitting}
           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-6 rounded"
           >
             Sign In
           </button>
           <button onClick={toggleForm} className="text-blue-700 hover:text-blue-900 text-sm float-right" >Create Account</button>
         </Form>
       )}
     </Formik>
     </div>
        </div>
    )
}

Signin.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Signin
