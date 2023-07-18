import { useState } from 'react';

import { ElementType } from '../../types/ElementType';

import donload from '../../img/download.svg';
import figure from '../../img/figure.svg';
import capitallettert from '../../img/capitallettert.svg';
import square from '../../img/square.svg';
import circle from '../../img/circle.svg';
import triangle from '../../img/triangle.svg';

import classes from './Sidebare.module.scss';

type CustomElementType = ElementType | File | null;

interface SidebarProps {
  handleElementSelect: (element: CustomElementType) => void;
  handleOpen: (element: boolean) => void;
}
export function Sidebare({ handleElementSelect, handleOpen }: SidebarProps) {
  const [open, setOpen] = useState<boolean>(false);

  const handleTextButtonClick = () => {
    handleElementSelect('text');
  };

  const handleRectButtonClick = () => {
    handleElementSelect('rect');
  };

  const handleCircleButtonClick = () => {
    handleElementSelect('circle');
  };

  const handleTriangleButtonClick = () => {
    handleElementSelect('triangle');
  };

  const handleElementButtonClick = () => {
    setOpen(!open);
  };

  const handleImgInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleElementSelect(file);
    }
  };

  return (
    <div className={classes.sidebar}>
      <button
        className={classes.sidebar__button}
        onClick={handleTextButtonClick}
      >
        <img src={capitallettert} alt="capitallettert" />
        Text
      </button>
      <button
        className={classes.sidebar__button}
        onClick={handleElementButtonClick}
      >
        <img src={figure} alt="figure" />
        Rect
        {open ? (
          <ul>
            <li onClick={handleCircleButtonClick}>
              <img src={circle} alt="circle" />
            </li>
            <li onClick={handleRectButtonClick}>
              <img src={square} alt="square" />
            </li>
            <li onClick={handleTriangleButtonClick}>
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
