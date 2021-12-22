import React, { useState } from "react";
import Derangement from "../../Derangement/Derangement";
import { Container } from "react-bootstrap";
import SelectTile from "./SelectTile";

const FormSelectionMenu = () => {
  const length = 17 * 6;
  const derangement = new Derangement(length);
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <Container>
      {[...Array(length)].map((_, index) => (
        <SelectTile
          key={index}
          isHovered={hoverIndex === index}
          onMouseEnter={() => setHoverIndex(derangement.getElement(index))}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          {index}
        </SelectTile>
      ))}
    </Container>
  );
};

export default FormSelectionMenu;
