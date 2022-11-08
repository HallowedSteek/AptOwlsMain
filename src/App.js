import React from "react";
import "./style.css";
import Nav from "./components/Nav";
import Launchpad from "./components/Launchpad";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [showLaunchpad, setShowLaunchpad] = React.useState(false);

  function handleClick() {
    console.log(showLaunchpad);
    setShowLaunchpad(() => !showLaunchpad);
  }

  return (
    <div className="App">
      <Nav enabled={showLaunchpad ? true : false} handleClick={handleClick} />
      {showLaunchpad ? <Launchpad /> : null}
      
      {!showLaunchpad ? <About /> : null}
      
      <Footer/>
            
    </div>
  );
}

export default App;
