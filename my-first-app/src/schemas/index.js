import * as Yup from 'yup'
const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

export const signUpSchemas=Yup.object({
   name: Yup.string().min(3).required("Please Enter name"),
   email:Yup.string().email("Please enter valid email").required("please enter email"),
   password:Yup.string().matches(strongRegex,"Please Enter valid password").required("please enter password"),
   cpassword:Yup.string().oneOf([Yup.ref("password")],"Password Not Match").required("please enter Confrim password"),
})