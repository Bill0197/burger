import React from "react";
import classes from "./Backdrop.module.css";

export default function Backdrop(props) {
    if (props.show) {
        return <div className={classes.Backdrop} onClick={props.clicked}></div>;
    } else {
        return null;
    }
}
