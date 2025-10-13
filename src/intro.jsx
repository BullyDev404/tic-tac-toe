import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Intro() {
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");

  const handleDone = () => {
    if (name.trim()) {
      setOpen(false);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white font-mono">
    
      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
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

          <Button
            onClick={handleDone}
            className="m-auto px-4 w-fit border-2 rounded-3xl font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            Start Game
          </Button>
        </DialogContent>
      </Dialog>

      
      {!open && (
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold mb-3">Welcome, {name}! 👋</h1>
          <p className="text-lg tracking-tight text-gray-300">
            Get ready to make your move — the grid awaits.
          </p>
        </div>
      )}
    </div>
  );
}

export default Intro;
