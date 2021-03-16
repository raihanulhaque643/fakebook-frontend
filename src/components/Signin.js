import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'

const Signin = ({ setToken, toggleForm }) => {
    const [signInError, setSignInError] = useState(false);
    const [signInErrorMessage, setSignInErrorMessage] = useState('');

    const handleSubmit = async (values, setSubmitting) => {
      setSignInErrorMessage('')
      setSubmitting(true)
      try {
        const response = await axios.post(' https://fakebook-backend-643.herokuapp.com/signin', 
        {
        email: values.email,
        password: values.password
        })
        setSignInError(false);
        setSignInErrorMessage('')
        console.log(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('firebaseUser', JSON.stringify(response.data.firebaseUser))
        setToken(response.data.token)
      } catch (e) {
        console.log({e})
        setSignInErrorMessage(e.response.data.error)
        setSignInError(true);
      }
      setSubmitting(false)
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
         handleSubmit(values, setSubmitting)
       }}
     >
       {({ isSubmitting }) => (
         <Form className="">
           {
             signInError ?
             <div className="text-red-700 mb-4 font-semibold">{signInErrorMessage}</div> :
             <div></div>
           }
           <div className="mb-6">
            <Field type="email" name="email" placeholder="Email" className="w-full p-2 text-blue-700 border-b-2 border-blue-300 outline-none"/>
            <ErrorMessage name="email" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="password" name="password" placeholder="Password" className="w-full p-2 text-blue-700 border-b-2 border-blue-300 outline-none" />
            <ErrorMessage name="password" component="small" className="text-red-700"/>
           </div>
           <button type="submit" disabled={isSubmitting}
           className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 mb-6 rounded flex flex-row justify-center items-center"
           >
             <span>Sign In</span>
            {
              isSubmitting &&
              <svg className="rounded-full animate-ping duration-300 w-3 h-3 border-2 mx-2"></svg>
            }
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
