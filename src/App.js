import './App.css';
import Header from './components/Header/Header.jsx';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
