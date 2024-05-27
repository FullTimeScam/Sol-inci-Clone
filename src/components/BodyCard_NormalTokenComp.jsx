import { useState } from "react";

const BodyCard_NormalTokenComp = ({
  imgNameWithExtention,
  title,
  ticker,
  tokenAddress,
  tokenAmount,
  dollorCost,
}) => {
  const [imgUrl, setImgUrl] = useState(`/images/${imgNameWithExtention}`);
  const [isHover, setIsHover] = useState(false);

  const shortenAddress = (tokenAddress) => {
    return `${tokenAddress.slice(0, 4)}...${tokenAddress.slice(-4)}`;
  };

  const shortAddress = shortenAddress(tokenAddress);
  const solscanUri = `https://solscan.io/token/${tokenAddress}`;

  return (
    <div className="flex justify-center items-start flex-col">
      <div
        role="button"
        className="relative"
        style={{ opacity: "1", transform: "none" }}
      >
        <div className="w-24 md:w-36 h-24 md:h-36 mx-5 flex justify-center">
          <div className="w-24 md:w-36 h-24 md:h-36">
            <img
              className="rounded-full bg-[#1C1C1C] border-primary object-cover w-24 md:w-36 h-24 md:h-36"
              src={imgUrl}
              alt={title}
            />
          </div>
        </div>
      </div>
      {/* 여기부터가 텍스트영역 */}
      <div className="w-24 md:w-36 flex flex-col items-start ml-5 mt-2 vt323-regular">
        <span
          title={title}
          className="w-24 md:w-36 md:text-lg leading-7 md:leading-8 capitalize truncate text-white"
        >
          ${title}
        </span>
        <a href={solscanUri} target="_blank">
          <div className="flex flex-row items-center gap-x-2">
            <img
              title="Open in Solscan"
              alt="Open in Solscan"
              src="/images/Solscan.png"
              className="h-3 md:h-5 rounded-full"
            />
            <span
              title={tokenAddress}
              className="text-sm md:text-lg truncate text-white w-16 md:w-24"
            >
              {shortAddress}
            </span>
          </div>
          <span
            title="token amount"
            className="text-xs sm:text-lg md:vt323-regular truncate w-24 md:w-36 text-white"
          >
            {tokenAmount} {ticker}
          </span>
          <div>
            <span
              title="price"
              className="text-xs sm:text-lg truncate text-white w-24 md:w-36 h-7"
            >
              {/* <span className="text-[#94E448]">&lt;$ </span>0.01 */}
              <span className="text-[#94E448]">$ </span>
              {dollorCost}
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
export default BodyCard_NormalTokenComp;
