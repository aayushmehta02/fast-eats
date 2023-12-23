import React from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function Home() {
return (
    <div className='bg-dark
     home'>
    <div><Navbar/></div>
    <div><Card/></div>
    <div><Footer/></div>
    <div><Carousel/></div>
            
</div>
  )
}
