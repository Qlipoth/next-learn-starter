import * as React from "react";
import Link from 'next/link';
import { NavLink, withRouter, RouteProps } from 'react-router-dom';

interface NavItem {
    link: string
    title: string
    active?: boolean
}

interface NavListProps {
    navList: NavItem[]
    children?: (item: NavItem) => React.ReactNode;
}

const Navigation: React.FC<NavListProps> = ({ navList, children}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-nav">
                {
                    navList.map((el:NavItem, index) => (
                        <NavLink
                            to={el.link}
                            key={index}
                            activeClassName="active"
                            className="nav-item nav-link"
                            exact={el.link === '/'}
                            >
                            {children && children(el) || el.title}
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    );
};

export default Navigation;
