import BodyCard_NormalTokenComp from "./BodyCard_NormalTokenComp";

const BodyCard_JupTrustedToken = () => {
  return (
    <div className="flex items-center justify-center sm:justify-start flex-wrap gap-y-5 sm:gap-y-4 w-full mt-4 sm:mt-8">
      <BodyCard_NormalTokenComp
        imgNameWithExtention="BONK.jpg"
        title="BONK"
        ticker="BONK"
        tokenAddress="DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
        tokenAmount="1,000"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="BKST.jpg"
        title="BKST"
        ticker="BKST"
        tokenAddress="6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"
        tokenAmount="400,000"
      />
    </div>
  );
};

export default BodyCard_JupTrustedToken;
