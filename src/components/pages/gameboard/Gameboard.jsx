import Grid from "../gameboard/Grid";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WinnerChecker from "../../hooks/WinnerChecker";

function Gameboard() {
  //Navigation stuff
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const name = queryParams.get("name");

  ///Board details
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [currentPlayer, setCurrentPlayer] = useState(name);

  useEffect(() => {
    if (!name || name.trim() === "") {
      navigate("/");
    }
  }, [name, navigate]);

  const handleMove = (index) => {
    if (board[index]) return; // if there's already one value in the box prev.

    //adding changes to board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // changing value of input and currentplayer
    setTurn(turn === "X" ? "O" : "X");
    setCurrentPlayer(currentPlayer === name ? "AI" : name);

    //Checking for a qinner
    const winner = WinnerChecker(newBoard);
    if (winner) {
      setTimeout(() => {
        alert(`${winner === "X" ? name : "AI"} wins!`);
        setBoard(Array(9).fill(null));
        setTurn("X");
        setCurrentPlayer(name);
      }, 100);
      return;
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#cccccc] text-white">
      <h1 className="text-3xl font-bold mb-6 font-mono">Tic Tac Toe</h1>
      <Grid board={board} handleMove={handleMove} name={name} />
      <p className="mt-6 text-lg font-mono text-black">
        {currentPlayer === name ? "Your Move" : "AI's Move"}
      </p>
    </div>
  );
}

export default Gameboard;
