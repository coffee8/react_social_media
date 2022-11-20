import './App.css';
import Header from './components/Header/Header.jsx';
import Profile from './components/Profile/Profile.jsx';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Routes className="app-wrapper-content">
                    <Route path='/profile/*'
                           element={<Profile postData={props.state.profilePage.postData}
                                             dispatch={props.dispatch}
                                             onPostChangeActionCreator={props.onPostChangeActionCreator}
                                             addPostActionCreator={props.addPostActionCreator}
                                             newPostText={props.state.profilePage.newPostText}
                           />}/>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer dialogData={props.state.dialogPage.dialogData}
                                             dispatch={props.dispatch}
                                             messageData={props.state.dialogPage.messageData}
                                             newMessageText={props.state.dialogPage.newMessageText}
                                             onUpdateMessageTextActionCreator={props.onUpdateMessageTextActionCreator}
                                             sendMessageActionCreator={props.sendMessageActionCreator}
                           />}/>
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
