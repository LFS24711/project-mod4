import '../App.css';
import Modal from './Modal';
import NavBar from './NavBar'
import Login from './Login';
import React, { useState, useEffect } from 'react';
import Test from './Test';
import { Routes, Route } from 'react-router-dom';
import EveryEverthing from '../pages/EveryEverything';
import YourEverthing from '../pages/YourEverything';
import EveryEverybody from '../pages/EveryEverybody';
import TopicCard from './TopicCard';
import UserDetailCard from './UserDetailCard';
import UsersCard from './UsersCard';


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const [currentTopic, setCurrentTopic] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const [b, setB] = useState([]);



  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
  }, []);

  console.log("Current User: ", b)
  // if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route path="/every/:title"
          element={<TopicCard currentTopic={currentTopic} user={user} />}
        />
        <Route path="/every_everything"
          element={<EveryEverthing user={user} setCurrentTopic={setCurrentTopic} />}
        />
        <Route path="/your_everything"
          element={<YourEverthing user={user}/>}
        />
         <Route path="/everbody/:id"
          element={<UsersCard b={b}/>}
        />
        <Route path="/every_everybody"
          element={<EveryEverybody selectUser={setSelectedUser} setB={setB} />}
        />
        <Route path="/everbody/:username"
          element={<UserDetailCard selectedUser={selectedUser} />}
        />
      </Routes>

    </div>
  );
}

export default App;