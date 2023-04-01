import { useState } from 'react';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(' ');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(' ');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          password,
          email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      setSuccessMessage('Registration successful!');
      setFirstName('');
      setLastName(' ');
      setPassword('');
      setEmail('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstname">FirsName:</label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastname">LastName:</label>
        <input
          type="text"
          id="lastname"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
     
      {errorMessage && <div>{errorMessage}</div>}
      {successMessage && <div>{successMessage}</div>}
      <button type="submit">Register</button>
    </form>
  );
}
