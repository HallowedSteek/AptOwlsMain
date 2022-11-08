import React from "react";
import Logo from "../images/logo.gif";
import "../style.css";

export default function Nav(props) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const [show, setShow] = React.useState(false)

  const styles = {
    display:show?"flex":"none",

  }

  const hambStyle = {
    transform: show ? 'rotate(180deg)' : '', 
    transition: 'transform 250ms ease' 
  }

  function toggleShow(){
    setShow(prev=>!prev)
  }

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div className="nav">
      <div className="nav--brand">
        <img
          style={{
            width: 85,
            height: 85,
          }}
          src={Logo}
          alt="logo"
        ></img>
        <h1>AptOwls</h1>
      </div>

      {windowWidth > 1292 ? (
        <div className="nav--items">
          <button onClick={props.handleClick} className={`${props.enabled?"nav--item-enabled":"nav--item"}`}>LAUNCHPAD</button>
          {/* <button className="nav--item">STAKING</button>
          <button className="nav--item">INFO</button> */}
      </div>
      ) : (
        <div className="nav--items--hamb">
          <div onClick={toggleShow} style={hambStyle} className="hamburger">
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
            <button className="hamburger--line"></button>
          </div>

          <div style={styles} className="hamb--menu">
            <button onClick={props.handleClick}   className="nav--item--hamb">LAUNCHPAD</button>
            {/* <button className="nav--item--hamb">STAKING</button>
            <button className="nav--item--hamb">INFO</button> */}
          </div>
        </div>
      )}
    </div>
  );
}
