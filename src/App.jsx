import Trello from "./Containers/BoardContainer";
import "./styles/app.css";
const App = () => {
  return (
    <div className="app">
      <h2 className="boardHeading">Trello Board</h2>
      <Trello />
    </div>
  );
};

export default App;
