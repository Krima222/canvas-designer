import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';
import imgJpg from '../../img/jpg/image.jpg';
import imgPng from '../../img/png/image.png';
import { Modal } from '../Modal/Modal';

import classes from './Canvas.module.scss'

interface CanvasProps {
  selectedElement: string | null;
  handleOpen: (element: boolean) => void;
  open: boolean;
}

const generateSVGCode = (canvas: fabric.Canvas | null): string => {
  if (!canvas) return '';
  return canvas.toSVG();
};

export function Canvas({ selectedElement, handleOpen, open }: CanvasProps) {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [elements, setElements] = useState<fabric.Object[]>([]);

  useEffect(() => {
    const newCanvas = new fabric.Canvas('canvas', {
      height: 700,
      width: 800,
      backgroundColor: 'pink',
    });

    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!canvas) return;
  
    const addText = () => {
      const text = new fabric.Textbox('Text', {
        left: 50,
        top: 50,
        fontSize: 20,
        fill: 'black',
      });

      text.on('selected', () => {
        text.bringToFront();
        canvas.renderAll();
      });
      
      text.on('moving', () => {
        text.bringToFront();
        canvas.renderAll();
      });

      canvas.add(text);
      canvas.renderAll();
      setElements((prevElements) => [...prevElements, text]);
    };
  
    const addRect = () => {
      const rect = new fabric.Rect({
        width: 50,
        height: 50,
        left: 100,
        top: 100,
        stroke: '#aaf',
        strokeWidth: 5,
        fill: '#faa',
      });
      canvas.add(rect);
      canvas.renderAll();
      setElements((prevElements) => [...prevElements, rect]);
    };

    const addJpgImage = () => {
      console.log('as')
      fabric.Image.fromURL(imgJpg, (img) => {
        img.scaleToWidth(200);
        img.scaleToHeight(200);
        canvas.add(img);
        canvas.renderAll();
        setElements((prevElements) => [...prevElements, img]);
      });
      };

    const addPngImage = () => {
      fabric.Image.fromURL(imgPng, (img) => {
        img.scaleToWidth(200);
        img.scaleToHeight(200);
        canvas.add(img);
        canvas.renderAll();
        setElements((prevElements) => [...prevElements, img]);
      });
    };

    const cleareCanvas = () => {
      if (canvas) {
        canvas.getObjects().forEach((el) => {
          canvas.remove(el);
        });
        canvas.renderAll();
        setElements([]);
      }
    }
  
    if (selectedElement === 'text') {
      addText();
    } else if (selectedElement === 'element') {
      addRect();
    } else if (selectedElement === 'jpg') {
      addJpgImage();
    } else if (selectedElement === 'png') {
      addPngImage();
    } else if (selectedElement === 'cleare') {
      cleareCanvas()
    }
  }, [selectedElement, canvas]);

  return (
    <div className={classes.canvas}>
      <canvas id="canvas" />
      {open ? <Modal handleOpen={handleOpen} svgCode={generateSVGCode(canvas)} /> : null}
    </div>
  );
}
