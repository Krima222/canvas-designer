import { Portal } from '../Portal/Portal';

import classes from './Modal.module.scss';

interface ModalProps {
  handleOpen: (element: boolean) => void;
  svgCode?: string;
}

export function Modal({ handleOpen, svgCode }: ModalProps) {
  const handleModalCloseButtonClick = () => {
    handleOpen(false);
  };

  return (
    <Portal>
      <div className={classes.modal}>
        <h2>Portal</h2>
        <button onClick={handleModalCloseButtonClick}>Close</button>
        <div>{svgCode}</div>
      </div>
    </Portal>
  );
}
