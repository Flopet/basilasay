"use client"
import "./css/PrintButton.css"

export function PrintButton() {
  return (
      <button onClick={() => window.print()} className="download-resume button">Download Resumé!</button>
  )
}