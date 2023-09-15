import React from 'react';
import List from '../../../Components/List';
import Footer from '../../../Share/Footer';

const MySaveSearch = () => {
  return (
    <div>
      <div className="mt-24 p-7 w-full">
        <div className="flex items-center">
          <div className="h-12 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold"> My Save List </h1>
        </div>
        <List name={'My Save List'} />
      </div>
      <Footer />
    </div>
  );
};

export default MySaveSearch;
