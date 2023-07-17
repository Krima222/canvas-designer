import { fabric } from 'fabric';

export function generateSVGCode(canvas: fabric.Canvas | null): string {
  if (!canvas) return '';
  return canvas.toSVG();
}