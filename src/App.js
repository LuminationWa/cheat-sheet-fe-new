import Nav from "./Components/Nav";
import CheatsheetOverview from "./Components/CheatsheetOverview";
import DefaultMain from "./Components/DefaultMain";

function App() {
  const user = false;
  return (
    <div className="App">
      <Nav />
      <main>{user ? <CheatsheetOverview /> : <DefaultMain />}</main>
    </div>
  );
}

export default App;
