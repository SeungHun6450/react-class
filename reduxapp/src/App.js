import { Provider } from "react-redux";
import CounterContainer from "./containers/CounterContainer";
// 기존 패턴
// import store from "./redux/store";
// ducks 패턴
import store from "./modules";

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
