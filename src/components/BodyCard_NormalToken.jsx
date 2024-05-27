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
        imgNameWithExtention="aZEUS.png"
        title="ZEUS Airdrop"
        ticker="ZEUS"
        tokenAddress="2SwUSgSMCUSGowWjzeF8A1kvS5BKNia447tqrTh9KmCU"
        tokenAmount="15,750"
        dollorCost="<0"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="DODG.png"
        title="DODG the Elephant Shrew"
        ticker="DODG"
        tokenAddress="FaYTnfmPK8uP4dvtECypG3ugCC3wQrG27pwkB1YkhXsG"
        tokenAmount="456"
        dollorCost="<0"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="FLIPGG.png"
        title="Flip.gg | #1 Lootbox Game"
        ticker="FLIPGG"
        tokenAddress="VVWAy5U2KFd1p8AdchjUxqaJbZPBeP5vUQRZtAy8hyc"
        tokenAmount="10,878"
        dollorCost="<0.04"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="IQ50.png"
        title="IQ50"
        ticker="IQ50"
        tokenAddress="21rweMLGYeMNonHW7H3xa5py17X6ZFRcHirCp9inRBQA"
        tokenAmount="800,000"
        dollorCost="22.34"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="PLANK.jpg"
        title="Planktos"
        ticker="PLANK"
        tokenAddress="DVuaDuQdPZ6H49inC2Xoyx7BpLAAJTPPChSfHuGpy8X4"
        tokenAmount="50000"
        dollorCost="107.0"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="RIP_DOGE.png"
        title="RIP DOGE"
        ticker="RIPDOGE"
        tokenAddress="R1PvYksqSofUnZCCvQyzHqFSGfqSugPQiXksGW8Ck6y"
        tokenAmount="67.3M"
        dollorCost="<0"
      />
    </div>
  );
};

export default BodyCard_NormalToken;
