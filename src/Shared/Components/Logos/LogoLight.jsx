import React from "react";
import { Link } from "react-router-dom";

import logo from '../../../../../marketplace/public/image/logos/wearslot/logo.png';
import Icon from "./Icon";

const LogoLight = () => {
  return (
    <Link to="/" className="logo logo-light">
      <Icon />
      <span className="logo-lg">
        <img src={logo} alt="" height="25" />
      </span>
    </Link>
  );
};


export default LogoLight;