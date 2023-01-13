import React from "react";
import Main from "../../pages/Main.jsx";
import Autopark from "../../pages/Autopark.jsx";
import Terms from "../../pages/Terms.jsx";
import Feedback from "../../pages/Feedback.jsx";
import Advices from "../../pages/Advices.jsx";
import Contacts from "../../pages/Contacts.jsx";
import MenuItem from "./MenuItem.jsx";

import "./Menu.sass"

export const menuItems = [
    {
        component: <Main/>,
        path: "/",
        title: "Main"
    },
    {
        component: <Autopark/>,
        path: "/autopark",
        title: "Autopark"
    },
    {
        component: <Terms/>,
        path: "/terms",
        title: "Terms"
    },
    {
        component: <Feedback/>,
        path: "/feedback",
        title: "Feedback"
    },
    {
        component: <Advices/>,
        path: "/advices",
        title: "Advices"
    },
    {
        component: <Contacts/>,
        path: "/contacts",
        title: "Contacts"
    },
]

const Menu = () =>
    (<div className="menu">
        <ul className="menuList">
            {menuItems.map(({component, path, title}) => {
                return <li key={title}>
                    <MenuItem component={component} title={title} path={path}/>
                </li>
            })}
        </ul>
    </div>);

export default Menu;
