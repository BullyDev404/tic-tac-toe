import player1 from "../../../assets/playerIcons/player1.svg";
import player2 from "../../../assets/playerIcons/player2.svg";

function Grid({ board, handleMove, name, currentPlayer }) {
  return (
    <>
      {/* player icons */}
      <div className="flex justify-between items-end w-[22rem]">
        <div
          className={`w-fit h-fit transition-opacity duration-400 ${
            currentPlayer === name ? "" : "opacity-20"
          }`}
        >
          <h1 className="font-mono text-lg font-semibold tracking-tight text-center">
            {name}
          </h1>
          <img
            src={player1}
            alt="player1"
            height={100}
            width={100}
            className="-mt-7 -mb-2"
          />
        </div>

        <div
          className={`w-fit h-fit transition-opacity duration-400 ${
            currentPlayer !== name ? "" : "opacity-20"
          }`}
        >
          <h1 className="font-mono text-lg font-bold tracking-tight text-center">
            Player 2
          </h1>
          <img
            src={player2}
            alt="player2"
            height={100}
            width={100}
            className="-mt-7 -mb-2"
          />
        </div>
      </div>

      <div className="relative inline-block">
        {/* offset shadow hack */}
        <div className="absolute right-4 top-4 bg-black w-[22rem] h-[22rem] z-0"></div>

        {/* The main grid on top */}

        <div className="grid grid-cols-3 w-[22rem] relative z-10 border-[2px]  border-black bg-white">
          {board.map((cell, index) => (
            <div
              key={index}
              onClick={() => handleMove(index)}
              className="aspect-square flex items-center justify-center text-5xl font-bold cursor-pointer
                       border-b-[2px] border-r-[2px] border-black hover:bg-black/10 transition-colors duration-150 text-black"
            >
              {cell}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;
