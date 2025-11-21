"use client"
import "./css/PrintButton.css"

export function PrintButton() {

  // This allows me to activate the print preview function AFTER the button is clicked rather than WHEN the button is clicked.
  const handleMouseUp = () => {
    window.print();
  };
  return (
      <button onMouseUp={handleMouseUp} className="download-resume button">Download Resumé</button>
  )
}