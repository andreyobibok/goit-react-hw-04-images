import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ getMoreImage }) => {
  return (
    <button onClick={getMoreImage} className={css.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  getMoreImage: PropTypes.func.isRequired,
};

export default Button;
