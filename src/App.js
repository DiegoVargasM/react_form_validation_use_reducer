import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  /* Add error handling */
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("")

  const checkFirstName = e => {
    setFirstName(e.target.value);
    if (!/^[a-zA-Z]{2,12}$/.test(firstName)) {
      setFirstNameError("Please enter a valid first name")
    } else {
      setFirstNameError("")
    }
  }
  const checkLastName = e => {
    setLastName(e.target.value);
    if (!/^[a-zA-Z]{2,12}$/.test(lastName)) {
      setLastNameError("Please enter a valid last name")
    } else {
      setLastNameError("")
    }
  }
  const checkEmail = e => {
    setEmail(e.target.value);
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError("Please enter a valid email")
    } else {
      setEmailError("")
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <h1 className="text-center text-3xl font-semibold mt-2 py-4">
        Registration Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            placeholder="John..."
            value={firstName}
            onChange={checkFirstName}
          />
        </div>
        {firstNameError && <p className="error">{firstNameError}</p>}

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe..."
            value={lastName}
            onChange={checkLastName}
          />
        </div>
        {lastNameError && <p className="error">{lastNameError}</p>}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="john@doe..."
            value={email}
            onChange={checkEmail}
          />
        </div>
        {emailError && <p className="error">{emailError}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default App;
