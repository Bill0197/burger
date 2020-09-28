import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxilliary";

export default function SideDrawer(props) {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop clicked={props.closed} show={props.open} />
            <div className={attachedClasses.join(" ")}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <div>
                    <NavItems />
                </div>
            </div>
        </Aux>
    );
}
