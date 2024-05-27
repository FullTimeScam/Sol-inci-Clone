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
        dollorCost="0.03"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="BKST.jpg"
        title="BKST"
        ticker="BKST"
        tokenAddress="6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"
        tokenAmount="400,000"
        dollorCost="6.60"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="MEW.webp"
        title="Cat In A Dogs World"
        ticker="MEW"
        tokenAddress="MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5"
        tokenAmount="3.76M"
        dollorCost="14,476.49"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="CWIF.jpg"
        title="Catwifhat"
        ticker="CWIF"
        tokenAddress="7atgF8KQo4wJrD5ATGX7t1V2zVvykPJbFfNeVf1icFv1"
        tokenAmount="10M"
        dollorCost="14.02"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="MANEKI.png"
        title="MANEKI"
        ticker="MANEKI"
        tokenAddress="25hAyBQfoDhfWx9ay6rarbgvWGwDdNqcHsXS3jQ3mTDJ"
        tokenAmount="5,199"
        dollorCost="67.79"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="WUF.png"
        title="Wuffi"
        ticker="WUF"
        tokenAddress="73xsLcBnLnc9bh81cqVKqj8uEyiarXng5ZwJuTbnVebG"
        tokenAmount="66.5M"
        dollorCost="47.25"
      />
      <BodyCard_NormalTokenComp
        imgNameWithExtention="ZEUS.png"
        title="ZEUS"
        ticker="ZEUS"
        tokenAddress="ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq"
        tokenAmount="1,718.70"
        dollorCost="807.28"
      />
    </div>
  );
};

export default BodyCard_JupTrustedToken;
