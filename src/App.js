import "./App.css";
import { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  firstNameError: "",
  lastNameError: "",
  emailError: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return {
        ...state,
        firstName: action.payload,
        firstNameError: !/^[a-zA-Z]{3,12}$/.test(action.payload)
          ? "First name must be 3-12 chars long."
          : ""
      };
    case "SET_LAST_NAME":
      return {
        ...state,
        lastName: action.payload,
        lastNameError: !/^[a-zA-Z]{3,12}$/.test(action.payload)
          ? "Last name must be 3-12 chars long."
          : ""
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
        emailError: !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/.test(
          action.payload
        )
          ? "Please enter a valid email"
          : ""
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
  };

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
            value={state.firstName}
            onChange={e =>
              dispatch({ type: "SET_FIRST_NAME", payload: e.target.value })
            }
          />
        </div>
        {state.firstNameError && <p>{state.firstNameError}</p>}

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe..."
            value={state.lastName}
            onChange={e =>
              dispatch({ type: "SET_LAST_NAME", payload: e.target.value })
            }
          />
        </div>
        {state.lastNameError && <p>{state.lastNameError}</p>}

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            placeholder="john@doe..."
            value={state.email}
            onChange={e =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>
        {state.emailError && <p>{state.emailError}</p>}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default App;
