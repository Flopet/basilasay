"use client";

import { useState } from "react";

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
      className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-border-strong text-white rounded-lg shadow-lg hover:opacity-80 transition-opacity"
    >
      {useCustomFont ? "Using Custom Font" : "Using Arial"}
    </button>
  );
}
