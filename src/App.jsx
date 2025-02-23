import './App.css'
import UserProfile from './components/UserProfile/UserProfile';
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PersonalProfile from "./components/PersonalProfile/PersonalProfile.jsx";


function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<UserProfile />} />
          <Route path="/persprof" element={<PersonalProfile />} />
          <Route path="/editprof" element={<EditProfile />} />
        </Routes>
      </Router>




  );
}

export default App
