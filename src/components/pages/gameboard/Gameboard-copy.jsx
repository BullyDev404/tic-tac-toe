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


  // Handle move function
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
      <h1 className="text-3xl lg:text-5xl font-bold mb-6 border-b-4 border-black pb-2">
        Tic Tac Toe
      </h1>
      <Grid
        board={board}
        handleMove={handleMove}
        name={name}
        currentPlayer={currentPlayer}
      />
      <p className="mt-7 text-xl font-mono text-black">
        {currentPlayer === name ? "Your Move..." : "AI's Move..."}
      </p>
    </div>
  );
}

export default Gameboard;
