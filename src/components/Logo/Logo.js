import React from "react";
import LogoImg from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

export default function Logo(props) {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img src={LogoImg} alt="burger logo" />
        </div>
    );
}
