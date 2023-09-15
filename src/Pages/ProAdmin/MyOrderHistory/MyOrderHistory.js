import React from 'react';
import List from '../../../Components/List';
import Footer from '../../../Share/Footer';

const MyOrderHistory = () => {
  return (
    <div>
      <div className="mt-24 p-7 w-full">
        <div className="flex items-center">
          <div className="h-12 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold"> Order History </h1>
        </div>
        <List name={'Order History'} />
      </div>
      <Footer />
    </div>
  );
};

export default MyOrderHistory;
