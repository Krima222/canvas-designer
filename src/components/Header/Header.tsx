import { ElementType } from '../../types/ElementType';

import classes from './Header.module.scss';

import logo from '../../img/logo.svg';
import arrowLeft from '../../img/arrow-left.svg';
import arrowRight from '../../img/arrow-right.svg';

type CustomElementType = ElementType | File | null;

interface HeaderProps {
  handleElementSelect: (element: CustomElementType) => void;
  handleOpen: (element: boolean) => void;
}

export function Header({ handleElementSelect, handleOpen }: HeaderProps) {
  const handleModalOpenButtonClick = () => {
    handleOpen(true);
  };

  const handleCleareButtonClick = () => {
    handleElementSelect('cleare');
  };

  const handleRedoButtonClick = () => {
    handleElementSelect('redo');
  };

  const handleDelButtonClick = () => {
    handleElementSelect('del');
  };

  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" />
      <div className={classes.header__wrapper}>
        <button
          className={classes.header__arrow}
          onClick={handleRedoButtonClick}
        >
          <img src={arrowLeft} alt="arrowLeft" />
        </button>
        <button
          className={classes.header__arrow}
          onClick={handleDelButtonClick}
        >
          <img src={arrowRight} alt="arrowRight" />
        </button>
        <button
          className={classes.header__button}
          onClick={handleCleareButtonClick}
        >
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
