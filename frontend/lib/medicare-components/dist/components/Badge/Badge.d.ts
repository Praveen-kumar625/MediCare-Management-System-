import React, { CSSProperties } from 'react';
import { ColorVariant } from '../../interfaces';
export interface BadgeProps {
    color?: ColorVariant;
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const Badge: {
    (props: BadgeProps): JSX.Element;
    defaultProps: {
        color: string;
    };
};
export { Badge };
