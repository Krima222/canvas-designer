import React, { useEffect } from 'react';
import { fabric } from 'fabric';

import classes from './Canvas.module.scss'

export function Canvas() {

  useEffect(() => {
    const newCanvas = new fabric.Canvas('canvas', {
      height: 700,
      width: 800,
      backgroundColor: 'pink',
    });

    return () => {
      newCanvas.dispose();
    };
  }, []);

  return (
    <div className={classes.canvas}>
      <canvas id="canvas" />
    </div>
  );
}