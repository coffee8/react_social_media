import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="appWrapper">
        <Header className="header"/>
        <Navbar className="navbar"/>
        <Profile className="profile"/>
    </div>
  );
}

export default App;
