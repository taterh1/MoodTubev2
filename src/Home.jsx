import React from "react";
import Search from "./Search";

export default function Home(props) {
  const { happy, sad, excited } = props;    
  return (
    <div>
      <h1>Welcome to MoodTube</h1>
      <h2>What is your mood?</h2>
      <Search happy={happy} sad={sad} excited={excited}/>
    </div>
  );
}
