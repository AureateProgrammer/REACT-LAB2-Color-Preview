import { useState } from 'react';


type ColorInputProps = {
  onColorChange: (color: string) => void;
};

function ColorInput({ onColorChange }: ColorInputProps) {
  return (
    <input
      type="text"
      onChange={(event) => onColorChange(event.target.value)}
    />
  );
}

export default ColorInput;