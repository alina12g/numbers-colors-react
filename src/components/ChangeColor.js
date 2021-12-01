import React, { useState } from "react";
import styled from "styled-components";
import "./ChangeColor.css";

const Text = styled.h5`
  text-align: center;
  font-weight: bolder;
`;

const ChangeColor = (props) => {
  const Buttons = [
    { id: 1, content: 20 },
    { id: 2, content: 100 },
    { id: 3, content: 700 },
    { id: 4, content: 1010 },
    { id: 5, content: 9090 },
  ];
  const [color, setColor] = useState();

  return (
    <div>
      <div className="buttons">
        {Buttons.map((button, id) => (
          <button key={id} onClick={() => setColor(color)}>
            {props.content}
          </button>
        ))}
      </div>
      <Text>Your number is:</Text>
    </div>
  );
};

export default ChangeColor;
