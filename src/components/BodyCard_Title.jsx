const BodyCard_Title = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:items-start gap-y-7 w-full">
      <div className="flex flex-col gap-y-5 items-center justify-center sm:items-start sm:justify-start">
        <div className="flex flex-row items-center justify-center sm:items-end sm:justify-start gap-y-4 sm:ml-5 gap-x-5 flex-wrap">
          <span className="text-[30px] text-primary underline text-center vt323-regular text-[#94E448]">
            Jupiter Trusted Tokens
          </span>
          <div className="flex items-center justify-center sm:items-start sm:justify-start flex-row flex-wrap gap-y-2 gap-x-5 -mb-3 sm:-mb-0.5">
            <button className="rounded uppercase press-start-2p-regular bg-[#94E448] px-2 h-5 text-[7px] md:h-7 mb-1 md:text-[11px]">
              Collapse
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start w-full">
          <div className="flex flex-col items-center sm:items-start justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default BodyCard_Title;
