import React from 'react';
import NavbarHome from '../../Share/NavbarHome';
import Banner from './Home/Banner/Banner';

import '../../Css/Navbar.css';
import WelcomePost from './WelcomePost/WelcomePost';

const Home = () => {
  return (
    <div>
      <NavbarHome />
      <Banner />
      <WelcomePost />
    </div>
  );
};

export default Home;
