import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/ProAdmin/Header';
import ProAdminHome from './Pages/ProAdmin/Index/ProAdminHome';
import MyProfile from './Pages/ProAdmin/My Profile/MyProfile';
import BusinessSales from './Pages/ProAdmin/MyPromos/BusinessSales';
import NewBusinessPromo from './Pages/ProAdmin/MyPromos/NewBusinessPromo';
import NewBusinessSales from './Pages/ProAdmin/MyPromos/NewBusinessSales';
import ProfessionalDirectory from './Pages/ProAdmin/MyPromos/ProfessionalDirectory';
import MySaveSearch from './Pages/ProAdmin/MySaveSearch/MySaveSearch';
import MyWatchList from './Pages/ProAdmin/MyWatchList/MyWatchList';
Aos.init();

function App() {
  return (
    <div>
      {/* <CreateAccount /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* dashboard */}
        <Route path="/proAdmin" element={<Header />}>
          <Route index element={<ProAdminHome />} />
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="businessSales" element={<BusinessSales />} />
          <Route
            path="professionalDirectory"
            element={<ProfessionalDirectory />}
          />
          <Route path="newBusinessSales" element={<NewBusinessSales />} />
          <Route path="newBusinessPromo" element={<NewBusinessPromo />} />
          <Route path="mySaveSearch" element={<MySaveSearch />} />
          <Route path="myWatchList" element={<MyWatchList />} />
        </Route>
      </Routes>

      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
