// import './App.css';
import Modal from './Modal';
import NavBar from './NavBar'
import Login from './Login';
import React, {useState, useEffect} from 'react';
import Test from './Test';
import { Routes, Route } from 'react-router-dom';
import EveryEverthing from '../pages/EveryEverything';
import YourEverthing from '../pages/YourEverything';
import EveryEverybody from '../pages/EveryEverybody';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

 // if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Test />
      <Routes>
        <Route path="/every_everything" element={<EveryEverthing />}/>
        <Route path="/your_everything" element={<YourEverthing />}/>
        <Route path="/every_everybody" element={<EveryEverybody />}/>
      </Routes>

    </div>
  );
}

export default App;