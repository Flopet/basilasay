"use client";

import { useState } from "react";
import "./FontToggle.css";

export function FontToggle() {
  const [useCustomFont, setUseCustomFont] = useState(true);

  const toggleFont = () => {
    setUseCustomFont(!useCustomFont);

    // Toggle font on body element
    if (useCustomFont) {
      document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
    } else {
      document.body.style.fontFamily = "var(--header-font)";
    }
  };

  return (
    <button
      onClick={toggleFont}
      className="font-toggle-button"
    >
      {useCustomFont ? "Using Custom Font" : "Using Arial"}
    </button>
  );
}
