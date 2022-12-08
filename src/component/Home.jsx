import React from 'react'
import Carousel from './Carousel';
import Perusahaan from './Perusahaan';
import Products from './Products';
import Jasa from './Jasa';

function Home() {
  return (
    <div>
            <Carousel/>
            <Products/>
            <Perusahaan/>
            <Jasa/>
    </div>

  );
};

export default Home