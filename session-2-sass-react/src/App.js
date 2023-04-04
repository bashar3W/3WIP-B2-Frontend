import React from "react";
import "./styles/_global.scss";

function App() {
  return (
    <div className="card">
      <div className="cardImg">
        <img
          className="cardImg__image"
          src="https://s01.sgp1.cdn.digitaloceanspaces.com/article/51036-cwobnirfka-1580816618.jpeg"
          alt=""
        />
      </div>
      <div className="cardBody">
        <h1 className="cardBody__title">
          Hello <span className="cardBody__title--yellow">World</span>
        </h1>
        <p className="cardBody__paragraph">
          The cat is a domestic species of small carnivorous mammal. It is the
          only domesticated species in the family Felidae and is commonly
          referred to as the domestic cat or house cat to distinguish it from
          the wild members of the family.
        </p>
      </div>
    </div>
  );
}

export default App;
