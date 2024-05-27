import { useState } from "react";
import BodyCard_NormalTokenComp from "./BodyCard_NormalTokenComp";

const BodyCard_NormalToken = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="flex items-center justify-center sm:justify-start flex-wrap gap-y-5 sm:gap-y-4 w-full mt-4 sm:mt-8"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <BodyCard_NormalTokenComp
        imgNameWithExtention="MEW.webp"
        title="Cat In A Dogs World"
        ticker="MEW"
        tokenAddress="MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5"
        tokenAmount="3.7M"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="ZEUS.png"
        title="ZEUS Airdrop"
        ticker="ZEUS"
        tokenAddress="2SwUSgSMCUSGowWjzeF8A1kvS5BKNia447tqrTh9KmCU"
        tokenAmount="15,750"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="DODG.png"
        title="DODG the Elephant Shrew"
        ticker="DODG"
        tokenAddress="FaYTnfmPK8uP4dvtECypG3ugCC3wQrG27pwkB1YkhXsG"
        tokenAmount="456"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="PLANK.jpg"
        title="Planktos"
        ticker="PLANK"
        tokenAddress="DVuaDuQdPZ6H49inC2Xoyx7BpLAAJTPPChSfHuGpy8X4"
        tokenAmount="5"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="RIP_DOGE.png"
        title="RIP DOGE"
        ticker="RIPDOGE"
        tokenAddress="R1PvYksqSofUnZCCvQyzHqFSGfqSugPQiXksGW8Ck6y"
        tokenAmount="67.3M"
      />
    </div>
  );
};

export default BodyCard_NormalToken;
