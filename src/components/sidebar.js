import React from "react";
import { Link } from "react-router-dom";
import FirebaseApp from "../constants/base";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faGrimace, faSave } from "@fortawesome/free-solid-svg-icons";
import "./styles/sideBar.css";
const sideBar = () => {
  return (
    <>
      <div className="sideBar">
        <button id="signOut" onClick={() => FirebaseApp.auth().signOut()}>
          Salir
        </button>
        <Link to={{ pathname: "List", typeList: "Pacientes de operatoria" }}>
          <FontAwesomeIcon className="icon" icon={faTooth} />
        </Link>
        <Link to={{ pathname: "List", typeList: "Pacientes de ortodoncia" }}>
          <FontAwesomeIcon className="icon" icon={faGrimace} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon className="icon" icon={faSave} />
        </Link>
      </div>
    </>
  );
};

export default sideBar;
