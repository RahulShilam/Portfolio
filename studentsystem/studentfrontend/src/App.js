//import { AppBar } from '@mui/material';
//import './App.css';
//import Appbar from './components/Appbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
// import Footer from './components/Footer';
// import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPageFound from './pages/NoPageFound';
//import Student from './components/Student';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Dashboard/>}/>
      {/* <Route index element={<Dashboard />} /> */}
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NoPageFound/>}/>
      {/* </Route> */}
    </Routes>
    {/* <div className="App"> */}
     {/* <Appbar/>
     <Student/> */}
     {/* <Header/>
     <Dashboard/>
     <Footer/> */}
     {/* </div>  */}
    </BrowserRouter>
    
  );
}

export default App;
