import { BrowserRouter, Route } from "react-router-dom";
import ListOfCards from "./ListOfCards"
import MainPage from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <MainPage />
      </Route>
      <Route path="/pokemons">
        <ListOfCards />
      </Route>
    </BrowserRouter>
  );
}

export default App;
