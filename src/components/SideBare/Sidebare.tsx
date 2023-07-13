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

    return (
        <div>
            <button onClick={handleTextButtonClick}>Text</button>
            <button onClick={handleElementButtonClick}>Img</button>
        </div>
    )
}