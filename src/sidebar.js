/** @format */
import React from "react";
import {Link} from 'react-router-dom'
// import sideBarData from '../../../../app-config/menu.json';
import {ProSidebar, Menu, MenuItem, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {BsHouseFill} from "react-icons/bs";
import {BsPersonFill} from "react-icons/bs";
import {BsPinterest} from "react-icons/bs";
import {BsCalculator} from "react-icons/bs";
import {BsCalculatorFill} from "react-icons/bs";
import {BsFileEarmark} from "react-icons/bs";
import {BsStack} from "react-icons/bs";
import {BsTagFill} from "react-icons/bs";
import Hamburger from 'hamburger-react'
import './sidebar.css';


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            change: false
        };
        this.changeState = this.changeState.bind(this);
    }


    clickMe = () => {
        this.props.clickMe()
    }

    changeState = () => {
        this.setState({
            change: !this.state.change
        });
    };

    render() {
        return (
            <>
                <ProSidebar
                 collapsed={this.props.mchange}
                 >
                    <SidebarHeader>
                        {/*<button onClick={this.changeState}>bfjfkld</button>*/}
                        <Hamburger
                            rounded
                            easing="ease-in"
                            toggled={!this.props.change}
                            toggle={this.clickMe}
                            distance="sm"
                            size={20}
                        />
                    </SidebarHeader>
                    <Menu iconShape="square">
                        <MenuItem icon={<BsHouseFill/>}>
                                Dashboard
                        </MenuItem>
                        <MenuItem icon={<BsPersonFill/>}>
                                Users
                        </MenuItem>
                        <MenuItem icon={<BsPinterest/>}>
                                Products
                        </MenuItem>
                        <MenuItem icon={<BsCalculator/>}>
                                Admin Config
                        </MenuItem>
                        <MenuItem icon={<BsCalculatorFill/>}>
                                Seller Config
                        </MenuItem>
                        <MenuItem icon={<BsFileEarmark/>}>
                                Report
                        </MenuItem>
                        <MenuItem icon={<BsStack/>}>
                                Buyer Assign
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                        <MenuItem icon={<BsTagFill/>}>
                                Security Logs
                        </MenuItem>
                    </Menu>
                </ProSidebar>
            </>
        )
    }
}

export default SideBar