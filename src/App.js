import "./App.css";

import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handlePasswordConfirmationChange = (event) => {
    const value = event.target.value;
    setPasswordConfirmation(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(email, password);
  };

  return (
    <div>
      <h1>Creat account</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          placeholder="Password confirmation"
          type="passwordConfirmation"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmationChange}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default App;
