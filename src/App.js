import logo from './logo.svg';
import './App.css';
import ListJobsComponent from './components/ListJobsComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplyToJobComponent from './components/ApplyToJobComponent';
import { useForm } from "react-hook-form";
import AppliedSuccessComponent from './components/AppliedSuccessComponent';

function App() {
  return (
  
    <div>
      <Router>    
           <HeaderComponent/>
               <div className="container bg-dark text-white">
                   <Routes>
                      <Route path='/' element={<ListJobsComponent/>}></Route>
                      <Route path='/jobs' element={<ListJobsComponent/>}></Route>
                      <Route path='/apply' element={<ApplyToJobComponent/>}></Route>
                      <Route path='/appliedSuccess' element={<AppliedSuccessComponent/>}></Route>
                    </Routes>
               </div>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
