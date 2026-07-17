import ListOfPlayers from "./Components/ListOfPlayers";
import IndianPlayers from "./Components/IndianPlayers";

function App() {
  const flag = false; // true to display players and who's score are lesser than 

  if (flag) {
    return <ListOfPlayers />;
  } else {
    return <IndianPlayers />;
  }
}

export default App;