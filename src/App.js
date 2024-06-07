import "./App.css";
import { Category } from "./components/Category";
import { Header } from "./components/Header";
import { TopRest } from "./components/TopRest";
import { OnlineDelivery } from "./components/OnlineDelivery";


function App() {
  return (
    <div className="">
      <Header />
      <Category />
      <TopRest />
      <OnlineDelivery />
    </div>
  );
}

export default App;
