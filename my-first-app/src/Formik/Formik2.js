import React from 'react'
import {useFormik,Formik,Form,Field} from 'formik'
import {signUpSchemas} from '../schemas/index'
const initialValues={
    name:'',
    email:'',
    password:'',
    cpassword:'',
};
function Formik2() {
    //Built in labrary in Formik
//  const {values,handleBlur,handleChange,handleSubmit,errors}=useFormik({
//         initialValues,
//         validationSchema:signUpSchemas,
        
//     });
   const onSubmit= (values,action)=>{
    console.log(values);
    action.resetForm();
}
  return (
    <div>

{/* Form handling using Formik */}
<Formik initialValues={initialValues} validationSchema={signUpSchemas} onSubmit={onSubmit}>
{({errors})=>(
    <Form className='sign-up'>
<label htmlFor='name'>Name:</label>
<Field type='text' name='name'/>
<br/>
<div>
  {errors.name&&(<p>{errors.name}</p>)}
</div>
<label htmlFor='email'>Email:</label>
<Field type='text' name='email'/><br />
<div>
  {errors.email&&(<p>{errors.email}</p>)}
</div>
<label htmlFor='password'>password:</label>
<Field type='password' name='password'/>
<br/>
<div>
  {errors.password&&(<p>{errors.password}</p>)}
</div>
<label htmlFor='cpassword'>C password:</label>
<Field type='password' name='cpassword'/>
<br/>
<div>
  {errors.cpassword&&(<p>{errors.cpassword}</p>)}
</div>
<button type='submit'>Submit</button>
</Form>
)}

</Formik>





    </div>
  )
}

export default Formik2