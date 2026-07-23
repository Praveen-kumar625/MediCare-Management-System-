import React, { CSSProperties } from 'react';
import { ColorVariant } from '../../interfaces';
import './callout.scss';
export interface CalloutProps {
    title?: string;
    color?: ColorVariant;
    children?: React.ReactElement;
    className?: string;
    style?: CSSProperties;
}
export declare const Callout: {
    ({ title, color, children, className, style, }: CalloutProps): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any> | null) | (new (props: any) => React.Component<any, any, any>)>;
    defaultProps: {
        color: string;
    };
};
