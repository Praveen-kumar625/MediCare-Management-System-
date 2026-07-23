import React from 'react';
import { IconType } from '../Icon/interfaces';
interface Props {
    label: string;
    active?: boolean;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    icon?: IconType;
    iconLocation?: 'left' | 'right';
}
declare const Tab: {
    (props: Props): JSX.Element;
    defaultProps: {
        iconLocation: string;
    };
};
export { Tab };
