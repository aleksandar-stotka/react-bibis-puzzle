import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import PuzzleBoard from "./components/PuzzleBoard";
import "./App.css"; // move your CSS here

export default function App() {
  useEffect(() => {
    const pieces = document.querySelectorAll(".polypiece");
    const puzzleContainer = document.getElementById("forPuzzle");

    pieces.forEach(piece => {
      piece.addEventListener("mouseup", () => {
        keepInsideBox(piece, puzzleContainer);
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <PuzzleBoard />

    </div>
  );
}

// your function (you can move it to utils.js later)
function keepInsideBox(piece, container) {
  const box = container.getBoundingClientRect();
  const el = piece.getBoundingClientRect();

  let newLeft = piece.offsetLeft;
  let newTop = piece.offsetTop;

  if (el.left < box.left) newLeft = 0;
  if (el.top < box.top) newTop = 0;
  if (el.right > box.right) newLeft = box.width - el.width;
  if (el.bottom > box.bottom) newTop = box.height - el.height;

  piece.style.left = `${newLeft}px`;
  piece.style.top = `${newTop}px`;
}
