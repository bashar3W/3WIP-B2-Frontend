import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "./DarkProvider";

const Home = () => {
  const { isDark, handleDarkButton } = useContext(DarkContext);
  console.log(isDark);

  return (
    <div>
      {isDark ? (
        <div style={{ background: "black", height: "100vh" }}>
          <Link onClick={handleDarkButton}>Dark</Link>
        </div>
      ) : (
        <div style={{ background: "white", height: "100vh" }}>
          <Link onClick={handleDarkButton}>Light</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
