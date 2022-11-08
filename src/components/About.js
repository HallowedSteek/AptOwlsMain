import React from "react";

import "../style.css";

// eslint-disable-next-line
import MechaEngineer from "../images/cardEng.gif";
import ImageHeader from "../images/headerImg.gif";
import WhoAreWe from "../images/whoAreWe.png";
import Ghusto from "../images/cardGhustt.gif";
import DamonG from "../images/damonG.gif";
import Roadmap from "../images/roadmap.gif";

import Title from "../images/title.gif";

export default function About() {
  return (
    <div className="about">
      <div className="headerDiv">
        <img className="headerImg" alt="somn" src={ImageHeader}></img>
      </div>

      <img className="titleGif" src={Title} alt="title"></img>

      <div className="whoAreWe">
        <img className="whoAreWeImg" alt="whoAreWe?" src={WhoAreWe}></img>
        <div className="whoAreWeText">
          We are a team of professional people, from around the world,
          ready to bring the best services and experiences on the aptos ecosystem!
        </div>
      </div>

      <div className="team">
        <img className="card" src={MechaEngineer} alt="card"></img>
        <img className="card" src={Ghusto} alt="card"></img>
        <img className="card" src={DamonG} alt="card"></img>
      </div>

      <img className="titleGif" src={Roadmap} alt="roadmap"></img>
    </div>
  );
}
