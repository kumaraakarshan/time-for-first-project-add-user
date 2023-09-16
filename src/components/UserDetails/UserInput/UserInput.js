import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './UserInput.css';
import ErrorComponent from './ErrorComponent';

const UserInput = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(false);
  const [isValidAge, setIsValidAge] = useState(false);
  const [isValidCollegeName, setIsValidCollegeName] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const usernameChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredUsername(inputValue);

    if (inputValue.trim().length > 0) {
      setIsValidUsername(true);
    } else {
      setIsValidUsername(false);
    }
  };

  const ageChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredAge(inputValue);

    if (inputValue.trim().length > 0) {
      setIsValidAge(true);
    } else {
      setIsValidAge(false);
    }
  };
  const CollegeNameChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredCollegeName(inputValue);

    if (inputValue.trim().length > 0) {
      setIsValidCollegeName(true);
    } else {
      setIsValidCollegeName(false);
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isValidUsername || !isValidAge || isValidCollegeName) {
      setErrorMessage('Please fill in all fields.');
      setIsErrorVisible(true); // Show the error message
      setIsFormVisible(false); // Hide the form
      return;
    }

    if (enteredAge <= 0) {
      setErrorMessage('Please enter a valid age (greater than 0).');
      setIsErrorVisible(true); // Show the error message
      setIsFormVisible(false); // Hide the form
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
    setEnteredCollegeName('');
    setIsValidUsername(false);
    setIsValidAge(false);
    setIsValidCollegeName(false);
    setErrorMessage('');
    setIsErrorVisible(false); // Hide the error message after successful submission
    setIsFormVisible(true); // Show the form again
  };

  const resetFormHandler = () => {
    setIsFormVisible(true); // Show the form again
  };

  return (
    <div>
      {isErrorVisible && (
        <div>
          <ErrorComponent errorMessage={errorMessage} /> {/* Render the error message */}
          <Button onClick={resetFormHandler}>Okay</Button> {/* Okay button to allow user to add data again */}
        </div>
      )}
      {isFormVisible && (
        <form onSubmit={formSubmitHandler}>
          <div className={`form-control ${isValidUsername ? '' : 'invalid'}`}>
            <label>Username</label>
            <input type="text" onChange={usernameChangeHandler} value={enteredUsername} />
          </div>
          <div className={`form-control ${isValidAge ? '' : 'invalid'}`}>
            <label>Age (years)</label>
            <input type="number" onChange={ageChangeHandler} value={enteredAge} />
          </div>
          <div className={`form-control ${isValidCollegeName ? '' : 'invalid'}`}>
            <label>CollegeName</label>
            <input type="text" onChange={CollegeNameChangeHandler} value={enteredCollegeName} />
          </div>
          <div className={`form-control ${isValidUsername && isValidAge ? 'valid-button' : 'invalid'}`}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserInput;
