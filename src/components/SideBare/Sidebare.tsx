import { useState } from 'react';

import donload from '../../img/download.svg';
import figure from '../../img/figure.svg';
import capitallettert from '../../img/capitallettert.svg';
import square from '../../img/square.svg';
import circle from '../../img/circle.svg';
import triangle from '../../img/triangle.svg';

import classes from './Sidebare.module.scss';

interface SidebarProps {
  addText: () => void;
  addRect: () => void;
  addCircle: () => void;
  addTriangle: () => void;
  addImage: (file: File) => void;
}
export function Sidebare({
  addText,
  addRect,
  addCircle,
  addTriangle,
  addImage,
}: SidebarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleElementButtonClick = () => {
    setOpen(!open);
  };

  const handleImgInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      addImage(file);
      event.target.value = '';
    }
  };

  return (
    <div className={classes.sidebar}>
      <button className={classes.sidebar__button} onClick={addText}>
        <img src={capitallettert} alt="capitallettert" />
        Текст
      </button>
      <button
        className={classes.sidebar__button}
        onClick={handleElementButtonClick}
      >
        <img src={figure} alt="figure" />
        Элементы
        {open ? (
          <ul>
            <li onClick={addCircle}>
              <img src={circle} alt="circle" />
            </li>
            <li onClick={addRect}>
              <img src={square} alt="square" />
            </li>
            <li onClick={addTriangle}>
              <img src={triangle} alt="triangle" />
            </li>
          </ul>
        ) : null}
      </button>
      <input
        className={classes.sidebar__input}
        type="file"
        id="input__file"
        accept="image/*"
        onChange={handleImgInputChange}
      />
      <label htmlFor="input__file" className={classes.sidebar__label}>
        <img src={donload} alt="donload" />
        <span>Загрузки</span>
      </label>
    </div>
  );
}
