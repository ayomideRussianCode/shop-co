
import React from 'react'
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProductCollection from '../components/ProductCollection';
import BrowseByStyle from '../components/BrowseByDressStyle';
import CustomerTestimonials from '../components/CustomersTestimonial';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div>
        <TopBar/>
        <NavBar/>
        <Hero/>
        <ProductCollection/>
        <BrowseByStyle/>
        <CustomerTestimonials/>
        <Footer/>
    </div>
  )
}

export default HomePage