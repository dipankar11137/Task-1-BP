import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/ProAdmin/Header';
import ProAdminHome from './Pages/ProAdmin/Index/ProAdminHome';
import MyProfile from './Pages/ProAdmin/My Profile/MyProfile';
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
        </Route>
      </Routes>

      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
