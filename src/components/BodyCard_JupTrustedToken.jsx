const BodyCard_JupTrustedToken = () => {
  return (
    <div className="flex items-center justify-center sm:justify-start flex-wrap gap-y-5 sm:gap-y-4 w-full mt-4 sm:mt-8">
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
                src="/images/BONK.jpg"
                alt="BONK"
              />
            </div>
          </div>
        </div>
        {/* 여기부터가 텍스트영역 */}
        <div className="w-24 md:w-36 flex flex-col items-start ml-5 mt-2 vt323-regular">
          <span
            title="BONK"
            className="w-24 md:w-36 md:text-lg leading-7 md:leading-8 capitalize truncate text-white"
          >
            BONK
          </span>
          <a
            href="https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
            target="_blank"
          >
            <div className="flex flex-row items-center gap-x-2">
              <img
                title="Open in Solscan"
                alt="Open in Solscan"
                src="/images/Solscan.png"
                className="h-3 md:h-5 rounded-full"
              />
              <span
                title="DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
                className="text-sm md:text-lg truncate text-white w-16 md:w-24"
              >
                DezX...B263
              </span>
            </div>
            <span
              title="total tokens"
              className="text-xs sm:text-lg md:vt323-regular truncate w-24 md:w-36 text-white"
            >
              1,000 Bonk
            </span>
            <div>
              <span
                title="price"
                className="text-xs sm:text-lg truncate text-white w-24 md:w-36 h-7"
              >
                {/* <span className="text-[#94E448]">&lt;$ </span>0.01 */}
                <span className="text-[#94E448]">$ </span>
                0.03
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* 새 카드 */}
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
                src="/images/BKST.jpg"
                alt="BKST"
              />
            </div>
          </div>
        </div>
        {/* 여기부터가 텍스트영역 */}
        <div className="w-24 md:w-36 flex flex-col items-start ml-5 mt-2 vt323-regular">
          <span
            title="BKST"
            className="w-24 md:w-36 md:text-lg leading-7 md:leading-8 capitalize truncate text-white"
          >
            BKST
          </span>
          <a
            href="https://solscan.io/token/6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"
            target="_blank"
          >
            <div className="flex flex-row items-center gap-x-2">
              <img
                title="Open in Solscan"
                alt="Open in Solscan"
                src="/images/Solscan.png"
                className="h-3 md:h-5 rounded-full"
              />
              <span
                title="6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"
                className="text-sm md:text-lg truncate text-white w-16 md:w-24"
              >
                6gnC...LSJA
              </span>
            </div>
            <span
              title="total tokens"
              className="text-xs sm:text-lg md:vt323-regular truncate w-24 md:w-36 text-white"
            >
              400,000 BKST
            </span>
            <div>
              <span
                title="price"
                className="text-xs sm:text-lg truncate text-white w-24 md:w-36 h-7"
              >
                {/* <span className="text-[#94E448]">&lt;$ </span>0.01 */}
                <span className="text-[#94E448]">$ </span>
                6.50
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BodyCard_JupTrustedToken;
