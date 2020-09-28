import React, { Component } from "react";
import Aux from "../Auxiliary/Auxilliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

export default class Layout extends Component {
    state = {
        showSideDrawer: false,
    };
    toggleMenu = () => {
        this.setState({ showSideDrawer: !this.state.showSideDrawer });
    };
    sideDrawerClose = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer,
            };
        });
    };
    render() {
        return (
            <Aux>
                <Toolbar toggle={this.toggleMenu} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClose}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}
