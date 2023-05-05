import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <h1 className='text-center text-3xl font-semibold mt-2 py-4'>Registration Form</h1>
      <form>

        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name='firstName' />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name='lastName' />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name='email' />
        </div>

      </form>
    </div>
  );
}

export default App;
