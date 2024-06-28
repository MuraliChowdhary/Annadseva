import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import DonationForm from './components/DonateForm/DonateForm';
import RequestForm from './components/RequestForm/RequestForm';

function App() {
  return (
    <div className="App">
      <DonationForm/>
      <RequestForm/>
    </div>
  );
}

export default App;
