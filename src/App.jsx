//! PARENT COMPONENT
import Navbar from "./components/Navbar";
import Fbc from "./alltopics/typesofcomponents/Fbc";
import Cbc from "./alltopics/typesofcomponents/Cbc";
import StateInFbc from "./alltopics/states/StatesInFbc";
import CounterInFbc from "./alltopics/states/CounterInFbc";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <Fbc />
      <Cbc /> */}
      <StateInFbc />
      <CounterInFbc />
    </div>
  );
}
export default App;
