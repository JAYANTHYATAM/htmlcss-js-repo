import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/About';
import PageNotFound from '.pages/PageNotFound';

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About " element={<About/>}/>
                <Route path ="/Contact" element ={<Contact/>}/>
                <Route path ="+" element ={<PageNotFound/>}/>
            </Routes>
        </Router>
    )
}