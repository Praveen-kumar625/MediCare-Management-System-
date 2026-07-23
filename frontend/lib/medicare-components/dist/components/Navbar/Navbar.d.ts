import React from 'react';
import { NavLink, NavIcon, NavImage, NavHeader, NavLinkList, NavLinkListIcon, NavSearch } from './interfaces';
interface Props extends React.Props<any> {
    bg?: string;
    variant?: 'light' | 'dark';
    navItems: (NavIcon | NavImage | NavHeader | NavLink | NavLinkList | NavLinkListIcon | NavSearch)[];
    className?: string;
}
declare const Navbar: {
    (props: Props): JSX.Element;
    defaultProps: {
        bg: string;
        variant: string;
    };
};
export { Navbar };
