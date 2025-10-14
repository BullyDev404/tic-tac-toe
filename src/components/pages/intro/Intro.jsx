import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Intro() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");

  return (
    <div className="h-screen flex items-center justify-center font-mono bg-[url('./assets/xo_grid.png')] bg-repeat relative">
      {/* Modal */}
      <Dialog open={open} className="align-center justify-center m-auto ">
        <DialogContent className="bg-white text-black rounded-xl p-6 w-[90%] max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-semibold mb-3">
              Welcome!
            </DialogTitle>
          </DialogHeader>

          <p className="mb-3 font-mono text-sm text-center tracking-tighter text-gray-600">
            Enter your name to begin your match.
          </p>

          <Input
            placeholder="Enter your player name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 font-mono"
          />

          <Button asChild disabled={!name.trim()}>
            <Link
              to={`/newgame?name=${name}`}
              className="px-4 w-fit border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition-all duration-300 m-auto"
            >
              Start Game
            </Link>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Intro;
