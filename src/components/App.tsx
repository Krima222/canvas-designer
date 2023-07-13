import React, { useState } from 'react';
import { Canvas } from "./Canvas/Canvas";
import { Sidebare } from "./SideBare/Sidebare";

import classes from './App.module.scss'

const App: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleElementSelect = (element: string) => {
        setSelectedElement(element);
    };

    const handleOpen = (element: boolean) => {
        setOpen(element);
    };

    return (
        <div className={classes.layout}>
            <Sidebare handleElementSelect={handleElementSelect} handleOpen={handleOpen}/>
            <Canvas selectedElement={selectedElement} handleOpen={handleOpen} open={open}/>
        </div>
    )
}

export {App}