import React from 'react'
import {useFormik} from 'formik'
const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:'',
};
function Formik() {
 const [values,handleBlur,handleChange,handleSubmit]=useFormik({
        initialValues,
        onSubmit:(values)=>{
            console.log(values);
        },
    });
    console.log(formik);
  return (
    <div>

{/* Form handling using Formik */}
<form className='sign-up'>
<label htmlFor='name'>Name:</label>
<input type='text' name='name'/>
<br/>
<label htmlFor='email'>Email:</label>
<input type='text' name='email'/>
<br />
<label htmlFor='password'>password:</label>
<input type='password' name='password'/>
<br/>
<label htmlFor='cpassword'>C password:</label>
<input type='password' name='cpassword'/>
<br/>
<button type='submit'>Submit</button>
</form>




    </div>
  )
}

export default Formik