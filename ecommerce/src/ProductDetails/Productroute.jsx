import React from 'react'
import ProductPage from './ProductPage'
import Faq from './FAQ'
import ProductReview from './Productreview'
// import Purchased from './Purchased'
import Footer from '../Home/Footer'
const Productroute = () => {
  return (
    <div>
      <ProductPage/>
      <ProductReview/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Productroute