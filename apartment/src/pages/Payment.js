import React from 'react'
import Layout from '../components/Layout/Layout'
import "../styles/PaymentStyle.css";
// import Card from '../images/card.png'

const Payment = () => {
  return (
    <Layout>
      <header>
      <div className='container'>
        <div className='left'>
          <h3>BILLING ADDRESS</h3>
          <form>
            Full Name <input type='text' name='' placeholder='Enter Name'></input>
            Email <input type='text' name='' placeholder='Enter Email'></input>
            Address <input type='text' name='' placeholder='Enter Address'></input>
            City <input type='text' name='' placeholder='Enter City'></input>
            <div id='zip'>
              <label>
                State 
                <select>
                  <option>Choose State....</option>
                  <option>Rajasthan</option>
                  <option>Hariyana</option>
                  <option>Uttarakhand</option>
                  <option>Madhya Pradesh</option>
                  
                </select>
              </label>
              <label>
                Zip Code <input type='number' name='' placeholder='Zip Code'></input>
              </label>
            </div>
           </form>
        </div>

        
        <div className='right'>
                <h3>PAYMENT</h3>
                <form>
                
                {/* Accepted Card <br></br> */}
               
                   
            
            Credit Card Number
             <input type='text' name='' placeholder='Enter Card Number'></input>
            
            Exp month
            <input type='text' name='' placeholder='Enter Month'></input>
            <div id='zip'>
              <label>
                Exp year 
                <select>
                  <option>Choose Year....</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  
                </select>
              </label>
              <label>
                CVV 
                <input type='number' name='' placeholder='CVV'></input>
              </label>
            </div>
           </form>
           <input type='submit' name="" value="Proceed to checkout"></input>

        </div>

      </div>
      </header>
    </Layout>
  )
}

export default Payment
