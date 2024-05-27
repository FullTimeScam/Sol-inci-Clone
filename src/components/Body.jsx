import BodyCard from "./BodyCard";
import Body_search from "./Body_search";

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <div
        hidden
        style={{
          position: "fixed",
          top: "1px",
          left: "1px",
          width: "1px",
          height: "0px",
          padding: "0px",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          whiteSpace: "nowrap",
          borderWidth: "0px",
        }}
      ></div>
      <div className="flex flex-row items-start justify-center mt-5 md:mt-8 gap-x-8 gap-y-4 md:gap-y-8 xl:gap-x-16 w-full">
        <div
          hidden
          style={{
            position: "fixed",
            top: "1px",
            left: "1px",
            width: "1px",
            height: "0px",
            padding: "0px",
            margin: "-1px",
            overflow: "hidden",
            clip: "rect(0px, 0px, 0px, 0px)",
            whiteSpace: "nowrap",
            borderWidth: "0px",
          }}
        ></div>
        <div className="flex flex-col grow items-center sm:items-start">
          <Body_search />
          <div className="flex flex-col justify-center items-center sm:items-start gap-y-7 w-full">
            <div className="flex flex-col gap-y-5 items-center justify-center sm:items-start sm:justify-start">
              <div className="flex flex-row items-center justify-center sm:items-end sm:justify-start gap-y-4 sm:ml-5 gap-x-5 flex-wrap">
                <span className="text-4xl text-primary underline text-center vt323-regular text-[#94E448]">
                  Unknown Collection
                </span>
                <div className="flex items-center justify-center sm:items-start sm:justify-start flex-row flex-wrap gap-y-2 gap-x-5 -mb-3 sm:-mb-0.5">
                  <button className="rounded uppercase press-start-2p-regular bg-[#94E448] px-2 h-5 text-[7px] md:h-7 mb-1 md:text-[11px]">
                    Collapse
                  </button>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center sm:items-start w-full">
                <div className="flex flex-col items-center sm:items-start justify-center">
                  <BodyCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
