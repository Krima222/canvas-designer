import { useEffect, useState } from 'react';
import { fabric } from 'fabric';

interface Props {
  selectedElement: string | File | null;
}

interface UseCanvasResult {
  canvas: fabric.Canvas | null;
}

const generateSVGCode = (canvas: fabric.Canvas | null): string => {
  if (!canvas) return '';
  return canvas.toSVG();
};

export function useCanvas({ selectedElement }: Props): UseCanvasResult {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  const [elements, setElements] = useState<fabric.Object[]>([]);
  const [history, setHistory] = useState<string[]>([]);

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
      setHistory((prevHistory) => [...prevHistory, generateSVGCode(canvas)]);
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
      setHistory((prevHistory) => [...prevHistory, generateSVGCode(canvas)]);
    };

    const addImage = (file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        fabric.Image.fromURL(url, (img) => {
          img.scaleToWidth(200);
          img.scaleToHeight(200);
          canvas.add(img);
          canvas.renderAll();
          setElements((prevElements) => [...prevElements, img]);
          setHistory((prevHistory) => [
            ...prevHistory,
            generateSVGCode(canvas),
          ]);
        });
      };
      reader.readAsDataURL(file);
    };

    const cleareCanvas = () => {
      if (canvas) {
        const canvasObjects = canvas.getObjects();
        const canvasSvgCode = generateSVGCode(canvas);

        canvas.remove(...canvasObjects);
        canvas.renderAll();

        setElements([]);
        setHistory([canvasSvgCode]);
        console.log(history);
      }
    };

    const redo = () => {
      if (history.length > 1) {
        const previousSvgCode = history[history.length - 2];
        fabric.loadSVGFromURL(previousSvgCode, (objects, options) => {
          const parsedObjects = fabric.util.groupSVGElements(objects, options);

          canvas.clear();
          canvas.add(parsedObjects).renderAll();
          setElements(parsedObjects.toObject());
          setHistory((prevHistory) =>
            prevHistory.slice(0, prevHistory.length - 1),
          );
        });
      }
    };

    if (selectedElement === 'text') {
      addText();
    } else if (selectedElement === 'element') {
      addRect();
    } else if (selectedElement === 'cleare') {
      cleareCanvas();
    } else if (selectedElement === 'redo') {
      redo();
    } else if (
      typeof selectedElement === 'object' &&
      selectedElement !== null
    ) {
      addImage(selectedElement as File);
    }
  }, [selectedElement, canvas]);

  return {
    canvas,
  };
}
