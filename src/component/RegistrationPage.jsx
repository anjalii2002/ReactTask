import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import formik, { useFormik } from "formik";
import UserSchema from "./UserSchema";


const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
    dob: "",
    companyName: "",
    idCardNumber: "",
    password: "",
    confirmPassword: "",

};


function  RegistrationForm() {
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: initialValues,
    validationSchema: UserSchema,
    onSubmit: (values) => {
      console.log("hii", values);
    },
  });

  const data = {
   
    firstName: values.firstName,
    lastName:values.lastName ,
    email:  values.email,
    phoneNumber: values.phoneNumber,
    alternatePhoneNumber: values.alternatePhoneNumber,
    streetAddress: values.streetAddress,
    city: values.city,
    state: values.state,
    pinCode: values.pinCode,
    dob: values. dob,
    companyName: values.companyName,
    idCardNumber: values.idCardNumber,
    password:values.password,
    confirmPassword: values.confirmPassword,
  };


  
    const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };




    return (
    <>
      <Typography
        fontWeight="bold"
        variant="h4"
        align="center"
        paddingTop="10px"
        gutterBottom
      >
        User Registration
      </Typography>
      <Container
        maxWidth="md"
        style={{ boxShadow: "2px 5px 10px grey", paddingTop: "20px" }}
      >
        <form onSubmit={handleSubmit} style={{ padding: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">First Name*</Typography>
              <TextField
                fullWidth
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
               {errors.firstName && touched.firstName ? (
                  <p className="error">{errors.firstName}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Last Name*</Typography>
              <TextField
                fullWidth
                value={values.lastName}
                onChange={handleChange}
              />
               {errors.lastName && touched.lastName ? (
                  <p className="error">{errors.lastName}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Email*</Typography>
              <TextField
                fullWidth
                // label="Email*"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
               {errors.email && touched.email ? (
                  <p className="error">{errors.email}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Phone Number*</Typography>
              <TextField
                fullWidth
                name="phoneNumber"
                type="tel"
                value={values.phoneNumber}
                onChange={handleChange}
              />
               {errors.phoneNumber && touched.phoneNumber ? (
                  <p className="error">{errors.phoneNumber}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Alternate Number*</Typography>
              <TextField
                fullWidth
                name="alternatePhoneNumber"
                type="tel"
                value={values.alternatePhoneNumber}
                onChange={handleChange}
              />
               {errors.alternatePhoneNumber && touched.alternatePhoneNumber ? (
                  <p className="error">{errors.alternatePhoneNumber}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Street Address*</Typography>
              <TextField
                fullWidth
                name="streetAddress"
                value={values.streetAddress}
                onChange={handleChange}
              />
               {errors.streetAddress && touched.streetAddress ? (
                  <p className="error">{errors.streetAddress}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">City*</Typography>
              <TextField
                fullWidth
                name="city"
                value={values.city}
                onChange={handleChange}
              />
               {errors.city && touched.city ? (
                  <p className="error">{errors.city}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">State*</Typography>
              <TextField
                fullWidth
                name="state"
                value={values.state}
                onChange={handleChange}
              />
               {errors.state && touched.state ? (
                  <p className="error">{errors.state}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Pin Code*</Typography>
              <TextField
                fullWidth
                name="pinCode"
                value={values.pinCode}
                onChange={handleChange}
              />
               {errors.pinCode && touched.pinCode ? (
                  <p className="error">{errors.pinCode}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">DOB*</Typography>
              <TextField
                fullWidth
                name="dob"
                type="date"
                value={values.dob}
                onChange={handleChange}
              />
               {errors.dob && touched.dob ? (
                  <p className="error">{errors.dob}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Company Name*</Typography>
              <TextField
                fullWidth
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
              />
               {errors.companyName && touched.companyName ? (
                  <p className="error">{errors.companyName}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">ID Card Number*</Typography>
              <TextField
                fullWidth
                name="idCardNumber"
                value={values.idCardNumber}
                onChange={handleChange}
              />
               {errors.idCardNumber && touched.idCardNumber ? (
                  <p className="error">{errors.idCardNumber}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1"> Password*</Typography>
              <TextField
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
               {errors.password && touched.password ? (
                  <p className="error">{errors.confirmPassword}</p>
                ) : null}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="subtitle1">Confirm Password*</Typography>
              <TextField
                fullWidth
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
               {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="error">{errors.confirmPassword}</p>
                ) : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "16px", marginLeft: "40%" }}
          >
            Register
          </Button>
        </form>
      </Container>
    </>
  );
};

export default RegistrationForm;