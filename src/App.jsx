import SolIncinerator from "./components/Header";
import Menu from "./components/Menu";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="bg-[#101010]">
      <SolIncinerator />
      <Menu />
      <Body />
    </div>
  );
};

export default App;
