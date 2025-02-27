import React from "react";
import HeroOrbit from "../components/HeroOrbit.jsx";
import starIcon from "../../public/assets/icons/star.svg";
import SparkleIcon from "../../public/assets/icons/sparkle.svg";

const Stars = () => {
  return (
    <div>

      <HeroOrbit size={400} rotation={-100} shouldOrbit={true} orbitDuration="30" shouldSpin={true} spinDuration="3">
        <img src={SparkleIcon} className="size-8 opacity-20"></img>
      </HeroOrbit>
      {/**first Sparkle */}
      <HeroOrbit size={430} rotation={244} shouldOrbit={true} orbitDuration="30" shouldSpin={true} spinDuration="3">
        <img src={SparkleIcon} className="size-8 opacity-0"></img>
      </HeroOrbit>
      {/**second sparkle */}
      <HeroOrbit size={440} rotation={179} shouldOrbit={true} orbitDuration="32" shouldSpin={true} spinDuration="3"> 
        <img src={SparkleIcon} className="size-5 opacity-20"></img>
      </HeroOrbit>
      {/**second circle */}
      <HeroOrbit size={520} rotation={-231} shouldOrbit={true} orbitDuration="34" shouldSpin={true} spinDuration="6">
        <div className="size-2 rounded-full bg-emerald-300/20 "></div>
      </HeroOrbit>
      {/**third sparkle */}
      <HeroOrbit size={530} rotation={278} shouldOrbit={true} orbitDuration="36" shouldSpin={true} spinDuration="3">
        <img src={SparkleIcon} className="size-10 opacity-20"></img>
      </HeroOrbit>
      {/**second Star */}
      <HeroOrbit size={550} rotation={20} shouldOrbit={true} orbitDuration="38" shouldSpin={true} spinDuration="6">
        <img src={starIcon} className="size-12"></img>
      </HeroOrbit>
      {/**third Star */}
      <HeroOrbit size={590} rotation={98} shouldOrbit={true} orbitDuration="40" shouldSpin={true} spinDuration="6">
        <img src={starIcon} className="size-8"></img>
      </HeroOrbit>
      {/**third circle */}
      <HeroOrbit size={650} rotation={-5} shouldOrbit={true} orbitDuration="42" shouldSpin={true} spinDuration="6">
        <div className="size-2 rounded-full bg-emerald-300/20 "></div>
      </HeroOrbit>
      {/**fourth Sparkle */}
      <HeroOrbit size={710} rotation={144} shouldOrbit={true} orbitDuration="44" shouldSpin={true} spinDuration="6">
        <img src={SparkleIcon} className="size-14 opacity"></img>
      </HeroOrbit>

      {/**first circle */}
      <HeroOrbit size={720} rotation={85} shouldOrbit={true} orbitDuration="46"shouldSpin={true} spinDuration="6" >
        <div className="size-3 rounded-full bg-emerald-300/20 "></div>
      </HeroOrbit>
      {/**first Star */}
      <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration="48" shouldSpin={true} spinDuration="6">
        <img src={starIcon} className="size-28"></img>
      </HeroOrbit>

    </div>
  );
};

export default Stars;
