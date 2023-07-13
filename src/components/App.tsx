import React, { useState } from 'react';
import { Canvas } from "./Canvas/Canvas"
import { Sidebare } from "./SideBare/Sidebare"

import classes from './App.module.scss'

const App: React.FC = () => {
    const [selectedElement, setSelectedElement] = useState<string | null>(null);

    const handleElementSelect = (element: string) => {
        setSelectedElement(element);
    };

    return (
        <div className={classes.layout}>
            <Sidebare handleElementSelect={handleElementSelect}/>
            <Canvas selectedElement={selectedElement}/>
        </div>
    )
}

export {App}