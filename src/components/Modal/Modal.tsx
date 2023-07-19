import { Portal } from '../Portal/Portal';

import cross from '../../img/cross.svg';

import classes from './Modal.module.scss';

interface ModalProps {
  handleOpen: (element: boolean) => void;
  generateSVGCode: () => string;
}

export function Modal({ handleOpen, generateSVGCode }: ModalProps) {
  const handleModalCloseButtonClick = () => {
    handleOpen(false);
  };

  return (
    <Portal>
      <div className={classes.overlay}>
        <div className={classes.modal}>
          <div className={classes.modal__content}>{generateSVGCode()}</div>
          <button
            className={classes.modal__button}
            onClick={handleModalCloseButtonClick}
          >
            <img src={cross} alt="cross" />
          </button>
        </div>
      </div>
    </Portal>
  );
}
