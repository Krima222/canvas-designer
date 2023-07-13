interface SidebarProps {
    handleElementSelect: (element: string) => void;
}
export function Sidebare({handleElementSelect}: SidebarProps) {

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

    return (
        <div>
            <button onClick={handleTextButtonClick}>Text</button>
            <button onClick={handleElementButtonClick}>Rect</button>
            <button onClick={handleJpgButtonClick}>Jpg</button>
            <button onClick={handlePngButtonClick}>Png</button>
        </div>
    )
}