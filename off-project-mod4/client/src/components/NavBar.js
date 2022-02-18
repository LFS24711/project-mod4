import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Login from './Login';
import Modal from './Modal';
import SignUp from './SignUp';
import Test from './Test';


function NavBar({user, setUser, isOpen, setIsOpen}) {
    
    const [signUp, setSignUp] = useState(false)


    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    

    return (
        <div>
<h1>Review Everything</h1>
    <nav>
        {!user?
            <button onClick={()=> setIsOpen(!isOpen)}>Login</button>:
            <NavLink to='/'><button onClick={handleLogout}>Logout</button></NavLink>
        }

         <Modal open={isOpen}>
                {!signUp?
                    <Login onLogin={setUser} setIsOpen={setIsOpen} setSignUp={setSignUp} /> :
                    <SignUp onLogin={setUser} setIsOpen={setIsOpen} setSignUp={setSignUp} />    
                }
        </Modal>:

        <NavLink to='/'><button>
            Home
        </button>
        </NavLink>

        <NavLink to='/every_everything'><button>
            Every Everything
        </button>
        </NavLink>

        <NavLink to='/your_everything'><button>
            Your Everything
        </button>
        </NavLink>

        <NavLink to='/every_everybody'><button>
            Every Everybody
        </button>
        </NavLink>
    </nav>
    {user?<p>Hello {user.username}, how is everything?</p>:null}
        </div>
    );
}

export default NavBar;