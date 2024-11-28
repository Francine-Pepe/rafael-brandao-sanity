import React from "react";
import { Spotify } from "../icons/Footer/Spotify";
import { AmazonMusic } from "../icons/Footer/AmazonMusic";
import { Applemusic } from "../icons/Footer/AppleMusic";
import { Deezer } from "../icons/Footer/Deezer";
import { Youtube } from "../icons/Footer/Youtube";

function WhereListen() {
  return (
    <div className="listen-container">
      <Spotify />
      <AmazonMusic />
      <Applemusic />
      <Deezer />
      <Youtube />
    </div>
  );
}

export default WhereListen;
