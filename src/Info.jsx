function Info() {
  return (
    <div
      className="flex flex-col min-h-screen w-screen text-black p-5 py-10 space-y-12 h-screen items-center justify-center 
             bg-[url('./assets/xo_grid.png')] bg-repeat relative"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-3">
          What is Tic tac toe
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
          Tic-tac-toe or X-O is a game for two players who take turns marking
          the spaces in a three-by-three grid with X or O. The player who
          succeeds in placing three of their marks in a horizontal, vertical, or
          diagonal row is the winner.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-3">
          How AI Works
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
          The AI in the game uses the Minimax algorithm which enables the AI
          player to make optimal moves by constructing a decision tree of all
          possible game states. At each node, the AI evaluates the potential
          moves by recursively simulating future game states, assuming the AI
          aims to maximize its score while the human opponent aims to minimize
          it.
        </p>
      </div>

      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-3">
          About Me
        </h1>
        {/* <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
          Hi, I’m BullyDev. I built this game to sharpen my React and logic
          skills. Here are a few links if you’d like to connect or see more of
          my projects —
        </p> */}

        <p className="font-sans text-base sm:text-lg md:text-xl leading-relaxed">
          Hey there! I’m <span className="font-bold">BullyDev</span>, the mind
          behind this game. I hope you enjoyed playing it! You can check out
          more of my projects on{" "}
          <a
            href="https://github.com/bullydev404"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 underline transition-colors duration-200"
          >
            my GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Info;
