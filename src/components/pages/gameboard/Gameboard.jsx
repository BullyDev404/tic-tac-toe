import Grid from "../gameboard/Grid";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Gameboard() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(search);
  const name = queryParams.get("name");

  useEffect(() => {
    if (!name || name.trim() === "") {
      navigate("/"); // or wherever your intro page is
    }
  }, [name, navigate]);

  return (
    <div className="text-center text-black">
      <h1 className="text-3xl font-bold">Welcome, {name}! 🎮</h1>
      <Grid />
    </div>
  );
}

export default Gameboard;
