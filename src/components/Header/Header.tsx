import classes from './Header.module.scss';

import logo from '../../img/logo.svg';
import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

interface HeaderProps {
  handleOpen: (element: boolean) => void;
  cleareCanvas: () => void;
  undoDeleteElement: () => void;
  deleteLastElement: () => void;
}

export function Header({
  handleOpen,
  cleareCanvas,
  undoDeleteElement,
  deleteLastElement,
}: HeaderProps) {
  const handleModalOpenButtonClick = () => {
    handleOpen(true);
  };

  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" />
      <div className={classes.header__wrapper}>
        <button className={classes.header__arrow} onClick={deleteLastElement}>
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
        <button className={classes.header__arrow} onClick={undoDeleteElement}>
          <img src={arrowRight} alt="arrowRight" />
        </button>
        <button className={classes.header__button} onClick={cleareCanvas}>
          Удалить всё
        </button>
        <button
          className={classes.header__button}
          onClick={handleModalOpenButtonClick}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}
