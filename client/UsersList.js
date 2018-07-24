import React from 'react';

import styles from './UsersList.css';

const UsersList = props => (
  <div className={styles.Users}>
    <div className={styles.UsersOnline}>
      <span className={styles.numberOfUsers}>{props.users.length}</span> {props.users.length === 1 ? 'person online' : 'people online'}
    </div>
    <ul className={styles.UsersList}>
      {
        props.users.map((user) => {
          return (
            <li key={user.id} className={styles.UserItem}>
              {user.name}
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default UsersList;