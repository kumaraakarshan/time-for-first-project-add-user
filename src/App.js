import React, { useState } from 'react';
import UserDetailList from './components/UserDetails/UserDetailList/UserDetailList';
import UserInput from './components/UserDetails/UserInput/UserInput';

import './App.css';

const App = () => {
  const [UserDetails, setUserDetails] = useState([
    { text: 'aakarshan', id: 'g1',number:23 },
  
  ]);

  const addUserHandler = (enteredUsername, enteredAge) => {
    setUserDetails((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        text: enteredUsername,
        number: enteredAge, // Add the age field
        id: Math.random().toString(),
      });
      return updatedUsers;
    });
  };
  
  const deleteItemHandler = UserId => {
    setUserDetails(prevUsers => {
      const updatedUsers = prevUsers.filter(User => User.id !== UserId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No Users found. Maybe add one?</p>
  );

  if (UserDetails.length > 0) {
    content = (
      <UserDetailList items={UserDetails} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <UserInput onAddUser={addUserHandler} />
      </section>
      <section id="Users">
        {content}
        {/* {UserDetails.length > 0 && (
          <UserDetailList
            items={UserDetails}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No Users found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
