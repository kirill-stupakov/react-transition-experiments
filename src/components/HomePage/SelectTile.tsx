import React from "react";

interface Props {
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: number;
}

const SelectTile: React.FC<Props> = ({
  children,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`bg-${
        isHovered ? "success" : "primary"
      } p-4 m-2 rounded-3 d-inline-flex justify-content-center align-items-center`}
      style={{
        width: 60,
        height: 60,
        transform: `scale(${isHovered ? 1.1 : 1})`,
        transition: "0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default SelectTile;
