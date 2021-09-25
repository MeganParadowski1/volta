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
    <div>
      <span onClick={toggle}>{titleDiv}</span>
      {showText && <PopupText />}
    </div>
  );
}
