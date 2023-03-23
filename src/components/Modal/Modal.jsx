import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = props => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.keyCode === 27) {
        props.onClose();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [props]);

  return (
    <div id="modal" onClick={props.onClickClose} className={css.Overlay}>
      <div className={css.Modal}>
        <img className={css.Largeimg} src={props.largeImageUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};

export default Modal;
