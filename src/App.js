import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Userlist from './components/Userdata';
import Footer from './components/Footer';
import AddUser from './components/AddUser';
import Login from './components/Login';
import Profile from './components/Profile';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userlist' element={<Userlist/>} />
        <Route path='/adduser' element={<AddUser/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
