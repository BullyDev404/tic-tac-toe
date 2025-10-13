import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center justify-center gap-30">
      <div className="text-center max-w-7xl text-5xl md:text-6xl lg:text-8xl ">
        TIC TAC TOE!
      </div>

      <div className="font-mono text-2xl md:text-3xl lg:text-2xl bg-white px-25 py-9 relative">
        <Link to="/intro">
          <div className="absolute -top-4 left-2 z-20 hover:left-0 hover:top-0 transition-all duration-100 ">
            <button className="border-4 border-black bg-white px-18 py-5 text-black font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
              PLAY
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
