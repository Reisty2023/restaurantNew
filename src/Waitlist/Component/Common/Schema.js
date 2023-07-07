import * as yup from "yup"

export const Schema = yup.object().shape({
    firstName:yup.string().required("Firstname Required"),
    surName:yup.string().required("Lastname Required"),
    email: yup.string().email("Please enter a valid email").required("Email Required"),
    phoneNumber:yup.number().required("Phone Number Required"),
restuarantName:yup.string().required("field can't be empty"),
// country: yup.string().required('Country is required'),
// category:yup.string().required('Category is required'),
// role:yup.string().required('Role is required'),
})