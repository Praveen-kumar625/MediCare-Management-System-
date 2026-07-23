import React, { CSSProperties } from 'react';
import { ButtonVariant } from '../../interfaces';
import { IconType } from '../Icon/interfaces';
export interface ButtonProps {
    outlined?: boolean;
    color?: ButtonVariant;
    block?: boolean;
    disabled?: boolean;
    size?: 'small' | 'large';
    icon?: IconType;
    iconLocation?: 'left' | 'right';
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
    iconClassName?: string;
    iconStyle?: CSSProperties;
}
declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        color: string;
        iconLocation: string;
    };
};
export { Button };
