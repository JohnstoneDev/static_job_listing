import './Styles/index.css'

import headerImg from './images/bg-header-desktop.svg'

import { HomeComponent } from './Components/HomeComponent';
import { Container } from './Components/Container'

function App() {
  return (
    <div className="app">
      <header style={{ backgroundImage : `url(${headerImg})` }}></header>
      <Container>
        <HomeComponent />
      </Container>
    </div>
  );
}

export default App;
