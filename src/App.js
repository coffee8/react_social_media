import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes className="app-wrapper-content">
                        <Route path='/profile/*' element={<Profile postData={props.state.profilePage.postData}
                                                                   dispatch={props.dispatch}
                                                                   onPostChangeActionCreator={props.onPostChangeActionCreator}
                                                                   addPostActionCreator={props.addPostActionCreator}
                                                                   newPostText={props.state.profilePage.newPostText}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogData={props.state.dialogPage.dialogData}
                                                                   messageData={props.state.dialogPage.messageData}/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
