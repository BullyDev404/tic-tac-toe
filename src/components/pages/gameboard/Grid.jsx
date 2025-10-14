function Grid({ board, handleMove }) {
  return (
    <div className="relative inline-block">
      {/* offset shadow hack */}
      <div className="absolute right-4 top-4 bg-black w-[22rem] h-[22rem] z-0"></div>


      {/* The main grid on top */}
      <div className="grid grid-cols-3 w-[22rem] relative z-10 border-[2px] border-black bg-white">
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
  );
}

export default Grid;
