import * as yup from "yup" ;

const validation= yup.object().shape({
    email: yup.string().email("sdadadas").required("Zorunlu alan"),
    password: yup.string().min(5).required(),
    passwordConfirm: yup.string().oneOf([yup.ref('password')]).required(),
})

export default validation;