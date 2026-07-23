import { ReactNode, CSSProperties } from 'react';
import { ButtonProps } from '../Button';
import { ButtonsAlignment } from './interfaces';
interface Props {
    show: boolean;
    toggle(): void;
    title?: string;
    body?: ReactNode;
    showHeaderCloseButton?: boolean;
    verticallyCentered?: boolean;
    buttonsAlignment?: ButtonsAlignment;
    closeButton?: ButtonProps;
    middleButton?: ButtonProps;
    successButton?: ButtonProps;
    className?: string;
    style?: CSSProperties;
    backdrop?: true | false | 'static';
    onEnter?(node: HTMLElement): any;
    onEntered?(node: HTMLElement): any;
    onEntering?(node: HTMLElement): any;
    onExit?(node: HTMLElement): any;
    onExited?(node: HTMLElement): any;
    onExiting?(node: HTMLElement): any;
}
declare const Modal: (props: Props) => JSX.Element;
export { Modal };
