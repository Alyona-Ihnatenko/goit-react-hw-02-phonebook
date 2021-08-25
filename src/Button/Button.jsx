import css from '../Button/Button.module.css';

function Button({ type, handleClick, buttonName }) {
  return (
    <button type={type} className={css.button} onClick={handleClick}>
      {buttonName}
    </button>
  );
}

export { Button };
