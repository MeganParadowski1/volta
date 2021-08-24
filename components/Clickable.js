import React, { useState } from "react";

export default function Clickable({ titleDiv, popupDiv }) {
  const [showText, setShowText] = useState(false);
  function toggle() {
    setShowText(!showText);
  }
  const PopupText = () => {
    return <span>{popupDiv}</span>;
  };
  return (
    <span onClick={toggle}>
      {titleDiv}
      {showText && <PopupText />}
    </span>
  );
}
