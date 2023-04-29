import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from 'react-router-dom'
import Banner from '../images/download.jpeg'
import "../styles/HomeStyles.css";

const Home1 = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:`url(${Banner})`}}>
        <div className='headerContainer'>
<h1>SmartBrickz</h1>

<p>Simplify Your Apartment Management Tasks Today </p>

<p> 
</p>
        </div>

      </div>
    </Layout>
  )
}

export default Home1
