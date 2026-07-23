import React, { CSSProperties } from 'react';
import { ColorVariant } from '../../interfaces';
interface Props {
    color?: ColorVariant;
    action?: boolean;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: (event: React.MouseEvent) => void;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const ListItem: (props: Props) => JSX.Element;
export { ListItem };
