import { useState } from 'react';

type ColorInputProps = {
    // this is a function coming from the parent component
    // It receives the color text the user types
    onColorChange: (color: string) => void;
};

function ColorInput({ onColorChange }: ColorInputProps) {
    // creating a local state
    const [color, setColor] = useState('');

    // this runs whenever the user types in the input
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        // grabbing the state/user input information
        const newColor = event.target.value;

        setColor(newColor);        // update local state
        onColorChange(newColor);   // send value back to parent
    }

    return (
        <div className="colorBox">

            <h1>Type a color name</h1>
            <p>Examples: red, blue, green, yellow, purple, pink, orange</p>
            <input
                type="text"
                value={color}
                onChange={handleChange}
            />

            {/* setting the background color of the div to the user input */}
            <div
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color,
                    marginTop: "10px"
                }}
            />
        </div>
    );
}

export default ColorInput;