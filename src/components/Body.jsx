import BodyCard_JupTrustedToken from "./BodyCard_JupTrustedToken";
import BodyCard_NormalToken from "./BodyCard_NormalToken";
import BodyCard_Title from "./BodyCard_Title";
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
          <BodyCard_NormalToken />
          <div className="mt-10"></div>
          <BodyCard_Title />
          <BodyCard_JupTrustedToken />
        </div>
      </div>
    </div>
  );
};

export default Body;
