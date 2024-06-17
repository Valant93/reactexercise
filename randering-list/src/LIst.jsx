import React from "react";
import Color from "./Color";

export default function List  ({ colors }) {
    return (
      <ul>
        {colors.map(color => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    );
  };
  
