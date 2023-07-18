import classes from './Header.module.scss';

import logo from '../../img/logo.svg';

export function Header() {
  return (
    <div className={classes.header}>
      <img src={logo} alt="logo" />
      <div className={classes.header__wrapper}>
        <button></button>
        <button></button>
        <button>Удалить всё</button>
        <button>Сохранить</button>
      </div>
    </div>
  );
}
