import './App.css';
import Dashboard from "./layouts/Dashboard";
import { Container } from 'semantic-ui-react';
import Navbar from "./Components/Navbar/Navbar"
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container className="main">
        <Dashboard></Dashboard>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
