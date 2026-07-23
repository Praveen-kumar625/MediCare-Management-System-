import React from 'react';
import { ColorVariant } from '../../interfaces';
interface Props {
    color?: ColorVariant;
    children?: React.ReactNode;
    title?: string;
    footer?: string;
    collapsible?: boolean;
    collapsed?: boolean;
    className?: string;
}
declare const Panel: (props: Props) => JSX.Element;
export { Panel };
