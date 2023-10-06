import "./App.css";
// import RegistrationForm from './components/RegistrationForm';
import RegisterPage from "./pages/RegisterPage";
import SelectCatPage from "./pages/SelectCatPage";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<RegisterPage title="Sign Up" />} />
      <Route path="/category" element = {<SelectCatPage title="Category Selection" />} />
      </Routes>
    </>
  );
}

export default App;
