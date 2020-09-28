import React from 'react';
import logo from '../img/logo.png';

const Minicard = () => {

  const miniCardStyles = {
    width: "75%",
    height: "120px",
    backgroundColor: "#7350FF",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    transform: "rotate(-12.5deg)",
    position: "absolute",
    zIndex: 0,
  }

  const miniCardLogoStyles = {
    width: "80px",
    height: "30px",
    alignSelf: "center",
  }

  return(
    <div className="mini-card" style={miniCardStyles}>
      <img src={logo} style={miniCardLogoStyles} alt="logo-cabify" />
    </div>
  );

}

export default Minicard;
