import { Component, ReactNode, CSSProperties } from 'react';
import { ColorVariant } from '../../interfaces';
export interface AlertProps {
    color?: ColorVariant;
    title?: string;
    message?: ReactNode;
    dismissible?: boolean;
    closeLabel?: string;
    className?: string;
    style?: CSSProperties;
    btnClassName?: string;
    btnStyle?: CSSProperties;
}
interface State {
    show: boolean;
}
declare class Alert extends Component<AlertProps, State> {
    constructor(props: AlertProps);
    render(): JSX.Element;
}
export { Alert };
