import { useState } from 'react';

const useDrawer = () => {
  const [drawer, setDrawer] = useState(false);

  return [drawer, setDrawer];
};

export default useDrawer;
