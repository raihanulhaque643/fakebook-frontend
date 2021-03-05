import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Signup = ({ setToken, toggleForm }) => {
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const [confimPassword, setConfirmPassword] = useState()

    // const [firstName, setFirstName] = useState()
    // const [lastName, setLastName] = useState()
    // const [dateOfBirth, setDateOfBirth] = useState()
    // const [phone, setPhone] = useState()

    return (
        <div className="flex h-screen bg-blue-200">
          <div className="w-full max-w-xs m-auto bg-blue-100 rounded p-5">
            <Formik
       initialValues={{ email: '', password: '', confirmPassword: '', firstName: '', lastName: '', phone: '', dateOfBirth: null }}
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
         if (values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Passwords must match'
        }   
        if (!values.firstName) {
            errors.firstName = 'First name is required'
        }   
        if (!values.lastName) {
            errors.lastName = 'Last name is required'
        }   
        if (!values.dateOfBirth) {
            errors.dateOfBirth = 'Date of birth is required'
        }    
        if (!values.phone) {
            errors.phone = 'Phone number is required'
        } else if (values.phone.length !== 11) {
            errors.phone = 'Phone number must be 11 digits'
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="">
             <div className="mb-6">
            <Field type="text" name="firstName" placeholder="First Name" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none"/>
            <ErrorMessage name="firstName" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="text" name="lastName" placeholder="Last Name" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none"/>
            <ErrorMessage name="lastName" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <label className="text-gray-500 px-2">Date Of Birth</label>
            <Field type="date" name="dateOfBirth" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none"/>
            <ErrorMessage name="dateOfBirth" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="text" name="phone" placeholder="Phone" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none"/>
            <ErrorMessage name="phone" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="email" name="email" placeholder="Email" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none"/>
            <ErrorMessage name="email" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="password" name="password" placeholder="Password" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none" />
            <ErrorMessage name="password" component="small" className="text-red-700"/>
           </div>
           <div className="mb-6">
            <Field type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 text-blue-700 border-b-2 border-blue-500 outline-none" />
            <ErrorMessage name="confirmPassword" component="small" className="text-red-700"/>
           </div>
           <button type="submit" disabled={isSubmitting}
           className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mb-6 rounded"
           >
             Sign Up
           </button>
           <button onClick={toggleForm} className="text-blue-700 hover:text-blue-900 text-sm float-right" >Sign in</button>
         </Form>
       )}
     </Formik>
     </div>
        </div>
    )
}

Signup.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Signup
