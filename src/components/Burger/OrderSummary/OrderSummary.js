import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary/Auxilliary";
import Button from "../../UI/Button/Button";

export default class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("OrderSummary will update");
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(
            (igKey, i) => {
                return (
                    <li key={igKey + i}>
                        <span style={{ textTransform: "capitalize" }}>
                            {" "}
                            {igKey}
                        </span>
                        : {this.props.ingredients[igKey]}
                    </li>
                );
            }
        );
        return (
            <Aux>
                <h3>Your Order </h3>
                <p>A Delitious with the following:</p>
                <ul>{ingredientSummary}</ul>
                <p>Continue to Chekout</p>
                <p>
                    Total Price:{" "}
                    <strong> {this.props.totalPrice.toFixed(1)}</strong>{" "}
                </p>
                <Button clicked={this.props.purchaseCanceled} btnType="Danger">
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}
