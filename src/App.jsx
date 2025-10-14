import "./App.css";
import { Link } from "react-router-dom";
import vector from "./assets/Vector.svg";

function App() {
  return (
    <div
      className="h-screen w-screen flex items-center justify-center 
             bg-[url('./assets/xo_grid.png')] bg-repeat relative"
    >
      <Link to="/info">
        <div className="absolute top-5 left-5 z-20">
          <div className="relative">
            <div className="absolute w-full h-full border-2 border-black bg-white -z-10 transition-all duration-200 hover:top-0 hover:left-0"></div>

            {/* Foreground content */}
            <div className="relative left-2 -top-2 hover:left-0 hover:top-0 border-2 border-black bg-white px-3 py-3 text-black font-mono cursor-pointer transition-all duration-200 flex items-center justify-center">
              <img src={vector} alt="info" className="w-6 h-6 font-extrabold" />
            </div>
          </div>
        </div>
      </Link>

      <div className="p-3 text-black flex flex-col items-center justify-center gap-30 ">
        <div className="text-center p-3 bg-transparent backdrop-blur-sm max-w-7xl text-5xl md:text-6xl lg:text-8xl">
          TIC TAC TOE!
        </div>

        <div className="font-mono text-xl sm:text-2xl md:text-3xl bg-white px-8 sm:px-16 md:px-24 py-6 sm:py-8 md:py-10 relative border-black border-4">
          <Link to="/intro">
          
            <div className="absolute -top-3 sm:-top-4 left-1 sm:left-2 z-20 transition-all duration-150 hover:left-0 hover:-top-1">

              <button className="border-4 border-black bg-white sm:px-10 md:px-16 py-3 sm:py-4 md:py-5 text-black font-bold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer transform">
                PLAY
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
