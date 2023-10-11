import "./App.css";
// import RegistrationForm from './components/RegistrationForm';
import RegisterPage from "./pages/RegisterPage";
import SelectCatPage from "./pages/SelectCatPage";
import HomePage from "./pages/HomePage";
import Weather from "./components/Weather";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<RegisterPage title="Sign Up" />} />
      <Route path="/category" element = {<SelectCatPage title="Category Selection" />} />
      <Route path="/category/homepage" element = {<HomePage title="HomePage"/>}/>
      <Route path ="/category/weather" element = {<Weather title="weather"/>}/>
    </Routes>
    </>
  );
}

export default App;
