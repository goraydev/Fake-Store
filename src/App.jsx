import { Provider } from "react-redux";
import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
