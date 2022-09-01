import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import Footer from "./components/Footer";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContainer>
          <Nav>
            <GiKnifeFork />
            <Logo to={"/"}>Ratatolli</Logo>
          </Nav>
          <Search />
          <Category />
          <Pages />
        </AppContainer>
          <Footer/>
        
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", Cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const AppContainer = styled.div`
  position: relative;
`;

export default App;
