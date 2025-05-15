
import React from 'react'
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProductCollection from '../components/ProductCollection';

function HomePage() {
  return (
    <div>
        <TopBar/>
        <NavBar/>
        <Hero/>
        <ProductCollection/>
    </div>
  )
}

export default HomePage