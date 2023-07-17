import React, { useState } from 'react';
import { Canvas } from './Canvas/Canvas';
import { Sidebare } from './SideBare/Sidebare';
import { ElementType } from '../types/ElementType';

import classes from './App.module.scss';

export function App() {
  const [selectedElement, setSelectedElement] = useState<
    ElementType | File | null
  >(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleElementSelect = (element: ElementType | File | null) => {
    setSelectedElement(element);
  };

  const handleOpen = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <div className={classes.layout}>
      <Sidebare
        handleElementSelect={handleElementSelect}
        handleOpen={handleOpen}
      />
      <Canvas
        selectedElement={selectedElement}
        handleOpen={handleOpen}
        isOpen={isOpen}
      />
    </div>
  );
}
