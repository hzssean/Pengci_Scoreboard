import React from "react";
import "./Instructions.css";

const Instructions = () => {
  return (
    <div className="bg">
      <div className="alignment">
        <div className="icontainer">
          <h3 className="home2Page_typography">Instructions to Play Trickster Roads:</h3>
          <div className="instruction-content">
            <p>
              Welcome to Trickster Roads, where you'll take on the role of a driver in an exciting Autonomous Vehicle
              (AV) simulation. Your goal is to navigate through the map and accomplish two key objectives:
            </p>
            <ol>
              <li>
                Earn "Pengci" Score: Test your skills in outsmarting the other AVs on the road. Trick them into
                behaving incorrectly by creating challenging traffic events such as causing collisions, violating
                traffic signals, or executing unexpected maneuvers. The more successfully you trick the AVs, the higher
                your "Pengci" score will be.
              </li>
              <li>
                Earn "Event" Score: Be on the lookout for other autonomous vehicles attempting to deceive you. Avoid
                falling into their traps, as they will try to lead you into making mistakes, such as getting involved
                in collisions or violating traffic rules. Your ability to stay alert and evade these tricky AVs will
                increase your "Event" score.
              </li>
            </ol>
            <p>
              As you immerse yourself in this thrilling experience, keep a close eye on your scores and strive to
              become a master of AV simulation. Remember, a delicate balance between tricking the AVs and avoiding
              their tricks will lead you to triumph on Trickster Roads. Are you ready to showcase your strategic prowess
              and driving skills in this adrenaline-pumping adventure? Get behind the virtual wheel and embark on the
              journey to prove yourself as the ultimate Trickster Roads champion! Good luck, and may the roads be ever
              in your favor!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
