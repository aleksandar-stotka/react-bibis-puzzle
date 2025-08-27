import { alea, intAlea } from "../utils/mathHelpers";
import { arrayShuffle } from "../utils/arrayUtils";

export default function PuzzleBoard() {
  // test random numbers
  const random1 = alea(5, 15);     // float between 5 and 15
  const random2 = intAlea(10);     // integer between 0 and 9
  const random3 = intAlea(50, 100); // integer between 50 and 99

  console.log("alea:", random1, "intAlea:", random2, random3);

  // make puzzle pieces array
  const pieces = Array.from({ length: 16 }, (_, i) => i + 1);

  // shuffle them
  const shuffledPieces = arrayShuffle([...pieces]);

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        border: "2px solid black",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(4, 1fr)",
      }}
    >
      {shuffledPieces.map((piece) => (
        <div
          key={piece}
          style={{
            border: "1px solid gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            backgroundColor: "#f2f2f2",
          }}
        >
          {piece}
        </div>
      ))}
    </div>
  );
}
