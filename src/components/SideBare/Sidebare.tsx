import { ElementType } from '../../types/ElementType';

type CustomElementType = ElementType | File | null;

interface SidebarProps {
  handleElementSelect: (element: CustomElementType) => void;
  handleOpen: (element: boolean) => void;
}
export function Sidebare({ handleElementSelect, handleOpen }: SidebarProps) {
  const handleTextButtonClick = () => {
    handleElementSelect('text');
  };

  const handleElementButtonClick = () => {
    handleElementSelect('element');
  };

  const handleCleareButtonClick = () => {
    handleElementSelect('cleare');
  };

  const handleRedoButtonClick = () => {
    handleElementSelect('redo');
  };

  const handleModalOpenButtonClick = () => {
    handleOpen(true);
  };

  const handleImgInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleElementSelect(file);
    }
  };

  return (
    <div>
      <button onClick={handleTextButtonClick}>Text</button>
      <button onClick={handleElementButtonClick}>Rect</button>
      <input type="file" accept="image/*" onChange={handleImgInputChange} />
      <button onClick={handleCleareButtonClick}>Cleare</button>
      <button onClick={handleRedoButtonClick}>Redo</button>
      <button onClick={handleModalOpenButtonClick}>Save</button>
    </div>
  );
}
