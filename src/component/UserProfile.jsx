import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography, Avatar, Button } from '@mui/material';
import { AccountCircle, Business, CreditCard, ShoppingBasket } from '@mui/icons-material';


import axios from 'axios';

const UserProfile = () => {




// //////////////////for user details////////////////////////////////////
  const [userData, setUserData] = useState([]);
  const apiUrl = 'https://fakerapi.it/api/v1/persons?_quantity=1&amp;_gender=male&amp;_birthday_start=2005-01-01';

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

// //////////////////////for credit card details///////////////////////////////////
const [userCredit, setUserCredit] = useState([]);
  const apiUrl1 = 'https://fakerapi.it/api/v1/credit_cards?_quantity=1'
  useEffect(() => {
    axios.get(apiUrl1)
      .then((response) => {
        setUserCredit(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // //////////////for product details//////////////////////
  const [userProduct, setUserProduct] = useState([]);
  const apiUrl2 = 'https://fakerapi.it/api/v1/products?_quantity=3&amp;_taxes=1&amp;_categories_type=uuid'
  useEffect(() => {
    axios.get(apiUrl2)
      .then((response) => {
        setUserProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  // //////////////////for user company details////////////////////////////////////
  const [userCompany, setUserCompany] = useState([]);
  const apiUrl3 = 'https://fakerapi.it/api/v1/companies?_quantity=1';

  useEffect(() => {
    axios.get(apiUrl3)
      .then((response) => {
        setUserCompany(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

 
  const { firstname } = userData[0] || {};


  
  return (
    <div>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>

          </Grid>

          <Grid item xs={12} md={4}>
            <Avatar
              sx={{ width: 200, height: 200, }}
              alt="User Avatar"
              src="/path/to/user-avatar.jpg"
            />
            <br></br>
            <Button fontWeight='bold' variant="outlined" startIcon={<AccountCircle />}>
              Edit Profile
            </Button>
          </Grid>
          {/* <Grid>
            <Typography fontWeight='bold' variant='h6 gutterBottom'>{userData.data?.[0]?.firstname}</Typography>
          </Grid>
         */}
           <Grid item xs={12}>
            <Typography  fontWeight='bold' variant="h6" gutterBottom>
              User Details
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
          ID: {userData.data?.[0]?.id}
          </Grid>
          <Grid item xs={12} md={4}>
          Firstname: {userData.data?.[0]?.firstname}
          </Grid>
          <Grid item xs={12} md={4}>
          Lastname: {userData.data?.[0]?.lastname}
          </Grid>
          <Grid item xs={12} md={4}>
          Email: {userData.data?.[0]?.email}
          </Grid>
          <Grid item xs={12} md={4}>
          Phone: {userData.data?.[0]?.phone}
          </Grid>
          <Grid item xs={12} md={4}>
          Gender: {userData.data?.[0]?.gender}
          </Grid>
          <Grid item xs={12} md={4}>
          Birthday: {userData.data?.[0]?.birthday}
          </Grid>
          <Grid item xs={12} md={4}>
          Address: {userData.data?.[0]?.address?.street}
          </Grid>
          <Grid item xs={12} md={4}>
          City: {userData.data?.[0]?.address?.city}
          </Grid>
          <Grid item xs={12} md={4}>
          Zipcode: {userData.data?.[0]?.address?.zipcode}
          </Grid>
          <Grid item xs={12} md={4}>
          Country: {userData.data?.[0]?.address?.country}
          </Grid>
          
          <Grid item xs={12}>
            <Typography  fontWeight='bold' variant="h6" gutterBottom>
             <Business/> Company Details
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
             Id :{userCompany.data?.[0]?.id}
          </Grid>
          <Grid item xs={12} md={4}>
             Name: {userCompany.data?.[0]?.name}
          </Grid>
          <Grid item xs={12} md={4}>
             Email: {userCompany.data?.[0]?.email}
          </Grid>
          <Grid item xs={12} md={4}>
             Vat: {userCompany.data?.[0]?.vat}
          </Grid>
          <Grid item xs={12} md={4}>
            Phone: {userCompany.data?.[0]?.phone}
          </Grid>
          <Grid item xs={12} md={4}>
             Country: {userCompany.data?.[0]?.country}
          </Grid>
          <Grid item xs={12} md={4}>
             Address: {userCompany.data?.[0]?.addresses[0]?.street}
          </Grid>
          <Grid item xs={12} md={4}>
             Building Number: {userCompany.data?.[0]?.addresses[0]?.buildingNumber}
          </Grid>
          <Grid item xs={12} md={4}>
             Steet Name: {userCompany.data?.[0]?.addresses[0]?.streetName}
          </Grid>
          <Grid item xs={12} md={4}>
             Zip Code: {userCompany.data?.[0]?.addresses[0]?.zipcode}
          </Grid>
          <Grid item xs={12} md={4}>
             Country: {userCompany.data?.[0]?.addresses[0]?.country}
          </Grid>
          <Grid item xs={12} md={4}>
             Country Code:{userCompany.data?.[0]?.addresses[0]?.county_code}
          </Grid>

          <Grid item xs={12} md={4}>
            Website: {userCompany.data?.[0]?.website}
          </Grid>

          <Grid item xs={12} md={4}>
            Image: {userCompany.data?.[0]?.image}
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight='bold' variant="h6" gutterBottom>
              <CreditCard/>Credit Card Information
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            Card Number: {userCredit.data?.[0].number }
          </Grid>
          <Grid item xs={12} md={4}>
            Owner: {userCredit.data?.[0].owner }
          </Grid>

          <Grid item xs={12} md={4}>
            Type:{userCredit.data?.[0].type }
          </Grid>
          <Grid item xs={12} md={4}>
            Expiration:  {userCredit.data?.[0].expiration}
          </Grid>
          <Grid item xs={12}>
            <Typography fontWeight='bold' variant="h6" gutterBottom>
             <ShoppingBasket/> Previously Bought Products
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
             Product Id:  {userProduct.data?.[0].id}  
          </Grid>
          <Grid item xs={12} md={4}>
             Name : {userProduct.data?.[0].name}
          </Grid>
          <Grid item xs={12} md={4}>
             Description : {userProduct.data?.[0].description}
          </Grid>
         
        </Grid>
      </Paper>
    </div>
  )
}

export default UserProfile;


