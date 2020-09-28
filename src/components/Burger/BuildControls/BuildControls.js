import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

export default function BuildControls(props) {
    console.log(props.purchasable);
    return (
        <div className={classes.BuildControls}>
            <p>
                Current Price: <strong>{props.price}</strong>
            </p>
            {controls.map((el) => (
                <BuildControl
                    key={el.label}
                    label={el.label}
                    added={() => props.ingredientAdded(el.type)}
                    removed={() => props.ingredientRemoved(el.type)}
                    disabled={props.disabled[el.type]}
                    price={props.price}
                />
            ))}
            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}
            >
                ORDER NOW
            </button>
        </div>
    );
}
