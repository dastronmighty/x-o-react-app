// src/components/settings.js

import React from "react";

const Settings = ({resetBoard, tempBoardSize, handleSizeChange, handleSizeUpdate}) => {
    return (
        <div>
            <div>
            <label htmlFor="board-size-input">Board Size:</label>
            <input
                id="board-size-input"
                type="number"
                value={tempBoardSize} // use the temporary state variable for the input value
                min={3}
                max={9}
                onChange={handleSizeChange}
            />
            <button onClick={handleSizeUpdate}>Update Size</button> 
            </div>
            <div>
                <label htmlFor="reset-input">Reset Board:</label>
                <button id="reset-input" onClick={resetBoard}>Reset</button>
            </div>
        </div>
    )
}

export default Settings