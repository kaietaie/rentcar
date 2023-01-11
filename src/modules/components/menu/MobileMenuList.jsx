import React from "react";
import {List, ListItem} from "@mui/material";
import MenuItem from "./MenuItem.jsx";
import {menuItems} from "./Menu.jsx";

const MobileMenuList = () => {
    return <List className="menuList--mobile">
        {menuItems.map(({component, path, title}) => {
            return <ListItem key={title}>
                <MenuItem isMobile component={component} title={title} path={path}/>
            </ListItem>
        })}
    </List>
}

export default MobileMenuList