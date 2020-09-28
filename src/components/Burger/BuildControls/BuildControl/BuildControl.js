import React from "react";
import classes from "./BuildControl.module.css";

export default function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.label}>{props.label}</div>
            <button
                disabled={props.disabled}
                onClick={props.removed}
                className={classes.Less}
            >
                Less
            </button>
            <button
                onClick={props.added}
                className={classes.More}
            >
                More
            </button>
        </div>
    );
}
