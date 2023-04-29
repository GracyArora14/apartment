import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box , Typography} from "@mui/material";
import "../styles/AnnouncementsStyles.css";

const Announcements = () => {
  return (
    <Layout  >
      

     <paper></paper>
      <Box sx={{my:25,
      textAlign:'center',p:2,
      "& h4":{fontWeight:"bold",fontFamily:'sans-serif',
      my:1,
      fontSize:"3rem",marginLeft:"10px"},
      "& p":{textAlign:"justify ",fontFamily:'sans-serif',},
      "@media (max-width:600px)":{mt:0,
      "& h4":{fontSize:"1.5rem,"}},
      }} >
        
      
      <Typography variant='h4'>
      Stay Informed!Catch Up on Our Latest Announcements
      </Typography>
      <p>(1) Attention all residents: There will be a community-wide meeting held next week in the clubhouse. Please make sure to attend as we will be discussing important updates and upcoming events</p>
      <p>(2) Heads up: The pool will be closed for maintenance from August 2nd-6th. We apologize for any inconvenience and appreciate your understanding</p>
      <p>(3) Attention gardeners: Our community garden plots are now available for the summer season. Please contact the HOA if you are interested in reserving a plot.</p>
      <p>(4) The street cleaning schedule has changed. Please make sure to move your cars off the street on the designated cleaning days to avoid tickets and towing</p>
      <p>(5) Community Event: We are excited to announce a movie night under the stars on the green this Friday! Bring your blankets and chairs and enjoy a family-friendly movie with your neighbors.</p>
      </Box>
      
    </Layout>
  )
}

export default Announcements
