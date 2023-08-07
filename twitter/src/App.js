import './App.css';
import Login from './Pages/Login';
import TweetContext from './Context/TweetContext';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProfile from './Pages/SingleProfile';
import SignIn from './Pages/SignIn';
import CreateAccount from './Pages/CreateAccount';


function App() {
  return (
    <TweetContext>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<CreateAccount/>} />
            <Route path="/profile" element={<SingleProfile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TweetContext>



  );
}

export default App;
