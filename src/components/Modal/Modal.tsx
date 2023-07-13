import { Portal } from "../../Portal/Portal"

import classes from './Modal.module.scss';

interface IProps {
    handleOpen: (element: boolean) => void;
    svgCode?: string;
}

export function Modal({handleOpen, svgCode}:IProps) {
    const handleModalOpenButtonClick = () => {
        handleOpen(false);
    };

    return (
        <Portal>
            <div className={classes.modal}>
                <h2>Portal</h2>
                <button onClick={handleModalOpenButtonClick}>Close</button>
                <div>
                    {svgCode}
                </div>
            </div>
        </Portal>
    )
} 