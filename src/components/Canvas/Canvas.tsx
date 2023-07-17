import { useCanvas } from '../model/useCanvas';
import { Modal } from '../Modal/Modal';
import { generateSVGCode } from '../../utils/canvasUtils';
import { ElementType } from '../../types/ElementType';

import classes from './Canvas.module.scss';

interface CanvasProps {
  selectedElement: ElementType | File | null;
  handleOpen: (element: boolean) => void;
  isOpen: boolean;
}

export function Canvas({ selectedElement, handleOpen, isOpen }: CanvasProps) {
  const { canvas } = useCanvas({ selectedElement });

  const svgCode = generateSVGCode(canvas);

  return (
    <div className={classes.canvas}>
      <canvas id="canvas" />
      {isOpen ? <Modal handleOpen={handleOpen} svgCode={svgCode} /> : null}
    </div>
  );
}
