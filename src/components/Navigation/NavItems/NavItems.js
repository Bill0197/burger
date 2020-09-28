import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

export default function NavItems(props) {
    return (
        <ul className={classes.NavItems}>
            <NavItem active link="/">Burger Builder</NavItem>
            <NavItem link="/">Checkout</NavItem>
        </ul>
    );
}
