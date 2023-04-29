import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Box , Paper,Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";

const Contact = () => {
  return (
    <Layout sx={{}}>
      
      <Box sx={{my :10,ml:10,"& h4":{fontWeight :"bold",mb:2,fontFamily:"revert-layer"}}}>
        <Typography variant='h4'>
Contact for any queries
        </Typography>
        <p>
           For any queries related to  Rent and lease , Maintenance and Repair Queries,
           Facility Queries,Billing and Payment Queries,Complaints and Feedback Queries,Move-In and Move-Out Queries and any other general 
           queries , you can contact the below numbers.
        </p>

      </Box >
      <Box sx={{m:3,width:'600px',ml:5,"@media (max-width :600px)":{width:'300px'} }}>
        <TableContainer component ={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}} align='center'>
                   Contact Details
                </TableCell>
              </TableRow>

            </TableHead>
            <TableBody sx={{bgcolor:'lightgrey',fontWeight:"bold"}}>
              <TableRow>
                <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1}}/> 1800-000-0001 (tollfree)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                    <EmailIcon sx={{color:'skyblue', pt:1}}/> smartbrickz@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>

              <TableCell>
                    <CallIcon sx={{color:'green', pt:1}}/> 9876543210
                </TableCell>
              </TableRow>
            </TableBody>

          </Table>

        </TableContainer>
      </Box>
      
    </Layout>
  )
}

export default Contact
