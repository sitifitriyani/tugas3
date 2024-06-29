import React from 'react';

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#33FFF6', '#FFF633'];

const ColorPicker = ({ onColorChange }) => {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => onColorChange(color)}
          className="w-8 h-8 rounded-full cursor-pointer"
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
