import Container from "./components/Container/Container";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
      </Container>
    </main>
  );
};

export default App;
