import logo from './logo.svg';
import './App.css';
import MiniDrawer from "./components/navbar"
import Homepage from "./containers/Home/Home"
import Skills from "./containers/Skills"

function App() {
  return (
    <>
    <MiniDrawer/>

    <Skills />
       </>
    );
}

export default App;
