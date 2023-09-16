import React from 'react';
import NavbarHome from '../../Share/NavbarHome';
import Banner from './Home/Banner/Banner';

import '../../Css/Navbar.css';
import FeaturedBusinessSales from './Home/Featured Business Sales/FeaturedBusinessSales';
import WelcomePost from './Home/WelcomePost/WelcomePost';

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <Banner />
      <WelcomePost />
      <FeaturedBusinessSales />
    </div>
  );
};

export default Home;
