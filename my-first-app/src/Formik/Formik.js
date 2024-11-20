import React from 'react'
import {useFormik} from 'formik'
import {signUpSchemas} from '../schemas/index'
const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:'',
};
function Formik() {
    //Built in labrary in Formik
 const {values,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues,
        onSubmit:(values)=>{
            console.log(values);
        },
    });
  return (
    <div>

{/* Form handling using Formik */}
<form className='sign-up' onSubmit={handleSubmit}>
<label htmlFor='name'>Name:</label>
<input type='text' name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/>
<br/>
<label htmlFor='email'>Email:</label>
<input type='text' name='email'value={values.email} onBlur={handleBlur} onChange={handleChange}/>
<br />
<label htmlFor='password'>password:</label>
<input type='password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/>
<br/>
<label htmlFor='cpassword'>C password:</label>
<input type='password' name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>
<br/>
<button type='submit'>Submit</button>
</form>




    </div>
  )
}

export default Formik