import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

const Header = ({ openDrawer }) => {
  const [drawer, setDrawer] = useState(false);
  return (
    <div>
      <Navbar setDrawer={setDrawer} drawer={drawer} />
      <Dashboard drawer={drawer} setDrawer={setDrawer} />
    </div>
  );
};

export default Header;
