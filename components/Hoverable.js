import React, { useState } from "react";

export default function Hoverable({ titleDiv, popupDiv }) {
  const [showText, setShowText] = useState(false);
  function toggle() {
    setShowText(!showText);
  }
  const PopupText = () => {
    return <span>{popupDiv}</span>;
  };
  return (
    <span onMouseOver={toggle}>
      {titleDiv}
      {showText && <PopupText />}
    </span>
  );
}
