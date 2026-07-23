import React, { CSSProperties } from 'react';
interface Props {
    as?: React.ElementType;
    fluid?: boolean;
    className?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
}
declare const Container: (props: Props) => JSX.Element;
export { Container };
