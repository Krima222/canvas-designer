import React, { useState } from 'react';
import { useCanvas } from './model/useCanvas';

import { Modal } from './Modal/Modal';
import { Sidebare } from './SideBare/Sidebare';
import { Header } from './Header/Header';

import classes from './App.module.scss';

export function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    addText,
    addRect,
    addCircle,
    addTriangle,
    addImage,
    cleareCanvas,
    undoDeleteElement,
    deleteLastElement,
    generateSVGCode,
  } = useCanvas();

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <div className={classes.layout}>
      <Header
        handleOpen={handleOpen}
        cleareCanvas={cleareCanvas}
        undoDeleteElement={undoDeleteElement}
        deleteLastElement={deleteLastElement}
      />
      <div className={classes.layout__wrapper}>
        <div className={classes.layout__sidebar}>
          <Sidebare
            addText={addText}
            addRect={addRect}
            addCircle={addCircle}
            addTriangle={addTriangle}
            addImage={addImage}
          />
        </div>
        <div className={classes.layout__canvas}>
          <canvas id="canvas" />
        </div>
      </div>
      {isOpen ? (
        <Modal handleOpen={handleOpen} generateSVGCode={generateSVGCode} />
      ) : null}
    </div>
  );
}
