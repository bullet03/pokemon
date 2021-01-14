import { BrowserRouter, Route } from "react-router-dom";
import ListOfCards from "./ListOfCards"
import MainPage from "./MainPage";
import Pokemon from "./Pokemon/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <MainPage />
      </Route>
      <Route exact path="/pokemons">
        <ListOfCards />
      </Route>
      <Route path="/pokemons/:id">
        <Pokemon />
      </Route>
    </BrowserRouter>
  );
}

export default App;
