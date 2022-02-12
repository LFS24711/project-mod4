import React, { useState } from "react";

function SignUp({ onLogin, setSignUp, setIsOpen }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        image_url: imageUrl,
        bio,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          id="username"
          name="username"
          value={username}
          autoComplete="off"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password: </label>
        <input
          id="password"
          name="password"
          value={password}
          autoComplete="off"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="off"
        />

        <label>Image Url:</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label htmlFor="bio">Bio</label>
        <input
          type="textarea"
          rows="3"
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button type="submit">Sign Up</button>

        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </form>

      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
}

export default SignUp;
