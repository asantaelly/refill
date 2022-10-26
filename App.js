import Route from "./src/Route";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  )
}