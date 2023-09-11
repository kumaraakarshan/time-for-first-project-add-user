import React from 'react';
import UserDetailItem from '../UserDetailItem/UserDetailItem';
import './UserDetailList.css';

const UserDetailList = (props) => {
  return (
    <ul className="goal-list">
      {
  props.items.map((user) => (
    <UserDetailItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
      <div>
        <strong>Username:</strong> {user.text} Age: {user.number}
      </div>
      
    </UserDetailItem>
  ))
}
    </ul>
  );
};

export default UserDetailList;
