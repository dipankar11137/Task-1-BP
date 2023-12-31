import React from 'react';
import useDrawer from '../../hooks/useDrawer';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

const Header = ({ openDrawer }) => {
  const [drawer, setDrawer] = useDrawer();

  return (
    <div>
      <Navbar setDrawer={setDrawer} drawer={drawer} />
      <Dashboard drawer={drawer} setDrawer={setDrawer} />
    </div>
  );
};

export default Header;
