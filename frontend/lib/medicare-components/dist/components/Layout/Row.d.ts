import React, { CSSProperties } from 'react';
interface Props {
    as?: React.ElementType;
    noGutters?: boolean;
    className?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
}
declare const Row: (props: Props) => JSX.Element;
export { Row };
