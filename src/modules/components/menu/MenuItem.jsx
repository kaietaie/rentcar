import React from "react";
import { NavLink} from "react-router-dom";
import './Menu.sass'

const MenuItem = ({component, path, title, isMobile}) => {
    const classNameHelper = ({isActive}) => {
        return `
            ${isMobile ? 'menu-item-mobile' : 'menu-item'}
            ${isActive ? ' menu-item--active' : ''
        }`
    }

    return (
        <NavLink className={classNameHelper} element={component} to={path}>
            {title}
        </NavLink>
    )
}

export default MenuItem;