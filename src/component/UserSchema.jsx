import  * as Yup from'yup';

const  UserSchema= Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().min(10).max(10).required("Phone Number is required"),
    alternatePhoneNumber: Yup.string().min(10).max(10),
    streetAddress: Yup.string().required("Street Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    pinCode: Yup.number().integer().min(6).required("Pin Code is required"),
    dob: Yup.date().required("Date of Birth is required"),
    companyName: Yup.string().required("Company Name is required"),
    idCardNumber: Yup.string().max(12).min(10).required("ID Card Number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
});

export default UserSchema;