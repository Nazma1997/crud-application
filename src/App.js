import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Contract from './components/pages/Contract';

function App() {
  return (
    <div>
         <Navbar />

         <Router>
             <Routes>
                 <Route exact path="/home" element={<Home/>} />
                 <Route exact path="/about" element={<About/>} />
                 <Route exact path="/contract" element={<Contract/>} />
              </Routes>
         </Router>
         
    </div>
  );
}

export default App;
