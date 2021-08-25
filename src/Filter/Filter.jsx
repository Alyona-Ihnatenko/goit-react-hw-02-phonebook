import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

function Filter({ onChange }) {
  return (
    <label className={css.label} htmlFor={uuidv4()}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        onChange={onChange}
        name="filter"
        required
      />
    </label>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export { Filter };
