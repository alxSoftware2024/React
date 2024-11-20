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
 const {values,handleBlur,handleChange,handleSubmit,errors}=useFormik({
        initialValues,
        validationSchema:signUpSchemas,
        onSubmit:(values,action)=>{
            console.log(values);
            action.resetForm();
        },
    });
    console.log(errors);
  return (
    <div>

{/* Form handling using Formik */}
<form className='sign-up' onSubmit={handleSubmit}>
<label htmlFor='name'>Name:</label>
<input type='text' name='name' value={values.name} onBlur={handleBlur} onChange={handleChange}/>
<br/>
<div>
  {errors.name&&(<p>{errors.name}</p>)}
</div>
<label htmlFor='email'>Email:</label>
<input type='text' name='email'value={values.email} onBlur={handleBlur} onChange={handleChange}/>
<br />
<div>
  {errors.email&&(<p>{errors.email}</p>)}
</div>
<label htmlFor='password'>password:</label>
<input type='password' name='password' value={values.password} onBlur={handleBlur} onChange={handleChange}/>
<br/>
<div>
  {errors.password&&(<p>{errors.password}</p>)}
</div>
<label htmlFor='cpassword'>C password:</label>
<input type='password' name='cpassword' value={values.cpassword} onBlur={handleBlur} onChange={handleChange}/>
<br/>
<div>
  {errors.cpassword&&(<p>{errors.cpassword}</p>)}
</div>
<button type='submit'>Submit</button>
</form>




    </div>
  )
}

export default Formik