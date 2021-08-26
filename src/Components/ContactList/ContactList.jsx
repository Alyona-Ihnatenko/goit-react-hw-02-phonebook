import React from 'react';
// import PropTypes from "prop-types";
import css from './ContactList.module.css';
import { Button } from '../Button/Button';

class ContactList extends React.Component {
  render() {
    const { contactList, handleRemove } = this.props;
    return (
      <ul className={css.list}>
        {contactList.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <p>
                {name}: {number}{' '}
              </p>
              <Button
                type="button"
                handleClick={() => handleRemove(id)}
                buttonName="Delete"
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
// ContactList.propTypes = {
//   contactList: PropTypes.func,
//   handleRemove: PropTypes.func,
// };

export { ContactList };
