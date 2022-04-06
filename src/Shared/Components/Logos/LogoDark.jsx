import React from "react";
import { Link } from 'react-router-dom';

import logo from '../../../../../marketplace/public/image/logos/wearslot/logo-color.png';
import Icon from "./Icon";

export default function LogoDark() {
  return (
    <Link to="/" className="logo logo-dark">
      <Icon/>
      <span className="logo-lg">
        <img src={logo} alt="" height="25" />
      </span>
    </Link>
  );
};
