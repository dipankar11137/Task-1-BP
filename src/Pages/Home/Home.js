import React from 'react';
import NavbarHome from '../../Share/NavbarHome';
import Banner from './Home/Banner/Banner';

import '../../Css/Navbar.css';
import FeaturedBusinessSales from './Home/Featured Business Sales/FeaturedBusinessSales';
import FeaturedFranchiseSales from './Home/Featured Franchise Sales/FeaturedFranchiseSales';
import WelcomePost from './Home/WelcomePost/WelcomePost';

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <Banner />
      <WelcomePost />
      <FeaturedBusinessSales />
      <FeaturedFranchiseSales />
    </div>
  );
};

export default Home;
