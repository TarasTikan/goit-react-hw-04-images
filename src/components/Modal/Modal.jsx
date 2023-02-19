import { ModalImg, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
const ModalRoot = document.querySelector('#ModalRoot');
export function Modal({ imgModal, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  });
  const keyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <Overlay onClick={onOverlayClose}>
      <ModalImg>
        <img src={imgModal} alt="pictureModal" />
      </ModalImg>
    </Overlay>,
    ModalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imgModal: PropTypes.string.isRequired,
};
