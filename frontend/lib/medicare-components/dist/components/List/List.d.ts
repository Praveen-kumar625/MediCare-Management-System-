import React, { CSSProperties } from 'react';
interface Props {
    layout?: 'flush';
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const List: (props: Props) => JSX.Element;
export { List };
