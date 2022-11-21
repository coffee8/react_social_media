import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes className="app-wrapper-content">
                    <Route path='/profile/*'
                           element={<Profile />}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
