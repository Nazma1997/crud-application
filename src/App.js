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
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <div>
         <Navbar />

         <Router>
             <Routes>
                 <Route exact path="/" element={<Home/>} />
                 <Route exact path="/about" element={<About/>} />
                 <Route exact path="/contract" element={<Contract/>} />
                 <Route exact path="/users/add" element={<AddUser/>} />
                 <Route exact path="/users/edit/:id" element={<EditUser/>} />
                 <Route exact path="/users/:id" element={<User/>} />
                 <Route path='*' element={<NotFound />} />
              </Routes>
         </Router>
         
    </div>
  );
}

export default App;
