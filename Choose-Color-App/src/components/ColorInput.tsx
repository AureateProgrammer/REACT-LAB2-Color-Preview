import { useState } from 'react';


type ColorInputProps = {
    //this is a function coming from thje parent component
    //It receives the color text the user types
  onColorChange: (color: string) => void;
};

function ColorInput({ onColorChange }: ColorInputProps) {
    //creating a local state
    const[color,setColor]=useState('')
    //this runs whenever the user types in the input
  return (
    <input
      type="text"
      onChange={(event) =>
        // Send the typeed value back to the parent component 
        onColorChange(event.target.value)}
    />
  );
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    //grabbing the state/user input information. 
    const newcolor = event.target.value;
    onColorChange(newcolor);
    setColor(newcolor)

  }
}

export default ColorInput;