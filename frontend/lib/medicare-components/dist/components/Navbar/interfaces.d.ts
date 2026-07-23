/// <reference types="react" />
export interface NavItem {
    type: string;
    className?: string;
}
export interface NavImage extends NavItem {
    src: string;
    onClick?: (event: React.MouseEvent<any>) => void;
    alt?: string;
}
export interface NavHeader extends NavItem {
    label: string;
    color?: string;
    onClick?: (event: React.MouseEvent<any>) => void;
}
export interface NavLink extends NavItem {
    label: string | React.ReactElement;
    dividerAbove?: boolean;
    icon?: string;
    onClick?: (event: React.MouseEvent<any>) => void;
    href?: string;
}
export interface NavIcon extends NavLink {
    color?: string;
    name: string;
    size?: string;
    iconClassName?: string;
    outline?: boolean;
}
export interface NavLinkList extends NavLink {
    children: Array<NavLink>;
    alignRight?: boolean;
}
export interface NavLinkListIcon extends NavIcon, NavLinkList {
}
export interface NavSearch extends NavItem {
    placeholderText?: string;
    buttonText?: string;
    buttonColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';
    onClickButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch?: (query: string) => Promise<any[]>;
}
