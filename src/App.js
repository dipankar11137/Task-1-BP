import Aos from 'aos';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/ProAdmin/Header';
import ProAdminHome from './Pages/ProAdmin/Index/ProAdminHome';
Aos.init();

function App() {
  return (
    <div>
      {/* <CreateAccount /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* <Route path="/createAccount" element={<CreateAccount />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/*" element={<NotFound />}></Route> */}
        {/* dashboard */}
        <Route path="/dashboard" element={<Header />}>
          <Route index element={<ProAdminHome />} />

          {/* <Route path="profile" element={<ProHome />} /> */}
          {/* <Route path="editProfile" element={<EditProfile />} /> */}
        </Route>
      </Routes>

      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default App;
