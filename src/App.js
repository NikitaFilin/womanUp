import "./App.css";

import { NavBar } from "./components/NavBar";
import { Chat } from "./components/Chat";

const App = () => {
  return (
    <div className="container">
      <NavBar />
      <Chat />
    </div>
  );
};

export default App;
