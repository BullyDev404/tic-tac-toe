function Grid({ board, handleMove }) {
  return (
    <div className="grid grid-cols-3 w-[15rem] mx-auto border-4 border-black">
      {board.map((cell, index) => (
        <div
          key={index}
          onClick={() => handleMove(index)}
          className="w-20 h-20 flex items-center justify-center text-4xl font-bold cursor-pointer 
                     border-[1px] border-black hover:bg-black/10 transition-colors duration-150"
        >
          {cell}
        </div>
      ))}
    </div>
  );
}

export default Grid;

