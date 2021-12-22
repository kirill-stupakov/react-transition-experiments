import React from "react";

const colors = ["#f4f1de", "#e07a5f", "#3d405b", "#81b29a", "#f2cc8f"];

const ColorSchemeSquares = () => {
  return (
    <div className="color-theme-squares d-flex">
      {colors.map((color) => (
        <div
          key={color}
          className="mx-1 rounded-2"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ColorSchemeSquares;
