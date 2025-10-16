import WinnerChecker from "./WinnerChecker";

export default function useAIMove(
  board,
  turn,
  setBoard,
  setTurn,
  setCurrentPlayer,
  name
) {
  function makeAIMove() {
    // ✅ Only act if it's AI's turn
    if (turn !== "O") return;

    // Get all empty positions
    const availableMoves = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((i) => i !== null);

    if (availableMoves.length === 0) return;

    // 🧠 Medium AI logic (smart but human-like)
    let bestMove;

    // Step 1: Can AI win in one move?
    for (let i of availableMoves) {
      const newBoard = [...board];
      newBoard[i] = "O";
      if (WinnerChecker(newBoard) === "O") {
        bestMove = i;
        break;
      }
    }

    // Step 2: Can player win next turn? Block it
    if (bestMove === undefined) {
      for (let i of availableMoves) {
        const newBoard = [...board];
        newBoard[i] = "X";
        if (WinnerChecker(newBoard) === "X") {
          bestMove = i;
          break;
        }
      }
    }

    // Step 3: Random human-like choice
    if (bestMove === undefined) {
      bestMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    // ✅ Apply AI move (without clearing player moves)
    const newBoard = [...board];
    newBoard[bestMove] = "O";

    setBoard(newBoard);

    const winner = WinnerChecker(newBoard);
    if (winner) {
      setTimeout(() => {
        alert(`${winner === "X" ? name : "AI"} wins!`);
        setBoard(Array(9).fill(null));
        setTurn("X");
        setCurrentPlayer(name);
      }, 200);
      return;
    }

    // Back to player’s turn
    setTurn("X");
    setCurrentPlayer(name);
  }

  return makeAIMove;
}
