interface SidebarProps {
    handleElementSelect: (element: string) => void;
    handleOpen: (element: boolean) => void;
}
export function Sidebare({handleElementSelect, handleOpen}: SidebarProps) {

    const handleTextButtonClick = () => {
        handleElementSelect('text');
      };
    
      const handleElementButtonClick = () => {
        handleElementSelect('element');
      };
    
      const handleJpgButtonClick = () => {
        handleElementSelect('jpg');
      };

      const handlePngButtonClick = () => {
        handleElementSelect('png');
      };

      const handleCleareButtonClick = () => {
        handleElementSelect('cleare');
      };

      const handleModalOpenButtonClick = () => {
        handleOpen(true);
      };

    return (
        <div>
            <button onClick={handleTextButtonClick}>Text</button>
            <button onClick={handleElementButtonClick}>Rect</button>
            <button onClick={handleJpgButtonClick}>Jpg</button>
            <button onClick={handlePngButtonClick}>Png</button>
            <button onClick={handleCleareButtonClick}>Cleare</button>
            <button onClick={handleModalOpenButtonClick}>Save</button>
        </div>
    )
}