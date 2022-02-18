import React, { useState } from 'react';

function Login({ onLogin, setIsOpen, setSignUp }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    function closeModal() {
        setIsOpen(false)
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username, password
            }),
        })
            .then((r) => {
                if (r.ok) {
                    r.json().then((user) =>{ 
                        onLogin(user);
                        closeModal()
                    });
                } else {
                    r.json().then((err) => {
                        setErrors(err.errors);
                    })
                }
            });
    }

    return (
        <div>
            {errors.map((e)=><p key={e}>{e}</p>)}
            <form onSubmit={handleSubmit}>
                <label >Username: </label>
                <input id='username' name='username' value={username} autoComplete='off' type="text" onChange={(e) => setUsername(e.target.value)} required/>
                <label >Password: </label>
                <input id='password' name='password' value={password} autoComplete='off' type="password" onChange={(e) => setPassword(e.target.value)} required/>

                <button type='submit'>
                    Login
                </button>

            </form>

            Don't have an account? <button onClick={() => setSignUp(true)}>Sign Up</button>

            <button onClick={() => closeModal()}>
                Close
            </button>
        </div>
    )

}

export default Login;