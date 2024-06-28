import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import DonationForm from './components/DonateForm/DonateForm';
import RequestForm from './components/RequestForm/RequestForm';

function App() {
  return (
    // <BrowserRouter>
    //   {/* <div className="app">
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/aboutus" element={<Aboutus/>} />
    //       <Route path="/contact" element={<Contact/>} />
    //       <Route path="/login" element={<Login/>} />
    //       <Route path="/register" element={<UserRegistration/>} />
    //       <Route path="/admin" element={<AdminDashboard/>} />
    //       <Route path="/user-type-selection" element={<UserTypeSelection />} />
    //       <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
    //     </Routes>
    //   </div> */}
      
    // </BrowserRouter>
    <div>
      <DonationForm/>
      <RequestForm/>
    </div>
  );
}

export default App;
