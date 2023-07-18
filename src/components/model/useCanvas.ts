import { useEffect, useState } from 'react';
import { fabric } from 'fabric';

interface UseCanvasResult {
  addText: () => void;
  addRect: () => void;
  addCircle: () => void;
  addTriangle: () => void;
  addImage: (file: File) => void;
  cleareCanvas: () => void;
  undoDeleteElement: () => void;
  deleteLastElement: () => void;
  generateSVGCode: () => string;
}

export function useCanvas(): UseCanvasResult {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [elements, setElements] = useState<fabric.Object[]>([]);
  const [del, setdel] = useState<fabric.Object[]>([]);

  useEffect(() => {
    const newCanvas = new fabric.Canvas('canvas', {
      height: 500,
      width: 900,
      backgroundColor: 'white',
    });

    setCanvas(newCanvas);

    return () => {
      newCanvas.dispose();
    };
  }, []);

  const addText = () => {
    if (!canvas) return;
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
    if (!canvas) return;
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

  const addCircle = () => {
    if (!canvas) return;
    const circle = new fabric.Circle({
      radius: 20,
      left: 200,
      top: 200,
      fill: 'green',
    });
    canvas.add(circle);
    canvas.renderAll();
    setElements((prevElements) => [...prevElements, circle]);
  };

  const addTriangle = () => {
    if (!canvas) return;
    const triangle = new fabric.Triangle({
      width: 50,
      height: 50,
      left: 300,
      top: 200,
      fill: 'blue',
    });
    canvas.add(triangle);
    canvas.renderAll();
    setElements((prevElements) => [...prevElements, triangle]);
  };

  const addImage = (file: File) => {
    if (!canvas) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const url = event.target?.result as string;
      fabric.Image.fromURL(url, (img) => {
        img.scaleToWidth(200);
        img.scaleToHeight(200);
        canvas.add(img);
        canvas.renderAll();
        setElements((prevElements) => [...prevElements, img]);
      });
    };
    reader.readAsDataURL(file);
  };

  const cleareCanvas = () => {
    if (!canvas) return;
    if (canvas) {
      const canvasObjects = canvas.getObjects();

      canvas.remove(...canvasObjects);
      canvas.renderAll();

      setElements([]);
    }
  };

  const undoDeleteElement = () => {
    if (canvas && del.length > 0) {
      const lastElement = del[del.length - 1];
      canvas.add(lastElement);
      canvas.renderAll();
      setElements((prevElements) => [...prevElements, lastElement]);
      setdel((prevElements) => prevElements.slice(0, -1));
    }
  };

  const deleteLastElement = () => {
    if (canvas && elements.length > 0) {
      const lastElement = elements[elements.length - 1];
      canvas.remove(lastElement);
      canvas.renderAll();
      setElements((prevElements) => prevElements.slice(0, -1));
      setdel((prevElements) => [...prevElements, lastElement]);
    }
  };

  const generateSVGCode = () => {
    if (!canvas) return '';
    return canvas.toSVG();
  };

  return {
    addText,
    addRect,
    addCircle,
    addTriangle,
    addImage,
    cleareCanvas,
    undoDeleteElement,
    deleteLastElement,
    generateSVGCode,
  };
}
