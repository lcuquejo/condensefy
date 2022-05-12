import React from 'react'
import product1 from '../../img/i003.png'
import product2 from '../../img/i001.png'
import product3 from '../../img/i003.png'

import './Products.css'

const Products = () => {
  return (
  <div className="wrapper">
    
    <div className='container'>
      <div>
      <h2>Cloud Architecture Consulting</h2>
      <img className='products-img' src={product1} alt="" height="200" />
      <p>Clouds, whether public or private, offer self-service developer capabilities as well as the elasticity and scalability that operations teams need to manage apps as demands change. With containers, microservices, and application program-
ming interfaces (APIs), DevOps teams can make frequent improvements to cloud applications. These are the building blocks of cloud-native development and the reasons why organizations increasingly look to the cloud as they modernize</p>
      </div>
      <div>
      <h2>Containerization Consulting</h2>
      <img className='products-img' src={product2} alt="" height="200" />
      <p>Clouds, whether public or private, offer self-service developer capabilities as well as the elasticity and scalability that operations teams need to manage apps as demands change. With containers, microservices, and application program-
ming interfaces (APIs), DevOps teams can make frequent improvements to cloud applications. These are the building blocks of cloud-native development and the reasons why organizations increasingly look to the cloud as they modernize</p>
      </div>
      <div>
      <h2>Cloud Optimization Services</h2>
      <img className='products-img' src={product3} alt="" height="200" />
      <p>Clouds, whether public or private, offer self-service developer capabilities as well as the elasticity and scalability that operations teams need to manage apps as demands change. With containers, microservices, and application program-
ming interfaces (APIs), DevOps teams can make frequent improvements to cloud applications. These are the building blocks of cloud-native development and the reasons why organizations increasingly look to the cloud as they modernize</p>
      </div>
    
    </div>
  </div>

    // <div className="row-product">
    //   <div className="col-md-2">
    //     <h2>Cloud Architecture Consulting</h2>
    //     <img className='products-img' src={product1} alt="" height="300" />
    //   </div>
    //   {/* <div className="col-md-8 product-detail">
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //   </div> */}
    //   <div className="col-md-2">
    //     <h2>Containerization Consulting</h2>
    //     <img className='products-img' src={product2} alt="" height="300" />
    //   </div>
    //   {/* <div className="col-md-8 product-detail">
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //   </div> */}
    //   <div className="col-md-2">
    //     <h2>Cloud Optimization Services</h2>
    //     <img className='products-img' src={product3} alt="" height="300" />
    //   </div>
    //   {/* <div className="col-md-8 product-detail">
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //   </div> */}
    // </div>
  )
}

export default Products