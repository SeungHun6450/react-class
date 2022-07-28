import Loading from "./components/Loading";
import Timer from "./components/Timer";
import Clock from "./components/Clock";
import Comp from "./components/Comp";
import Comp2 from "./components/Comp2";
import Handlers from "./components/Handlers";
import Login from "./components/Login";
import Refs from "./components/Refs";
import Newtimer from "./components/Newtimer";

function App() {
  return (
    <>
    <Loading />
    <hr />
    <Timer s={60} />
    <Timer s={30} />
    <hr />
    <Clock />
    <hr />
    <Comp />
    <hr />
    <Comp2 />
    <hr />
    <Handlers />
    <hr />
    <Login />
    <hr />
    <Refs />
    <hr />
    <Newtimer />
    </>
  )
}

export default App;
