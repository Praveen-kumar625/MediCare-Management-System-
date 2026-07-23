import React, { CSSProperties } from 'react';
interface Props {
    as?: React.ElementType;
    xl?: true | 'auto' | number | {
        span?: true | 'auto' | number;
        offset?: number;
        order?: number;
    };
    lg?: true | 'auto' | number | {
        span?: true | 'auto' | number;
        offset?: number;
        order?: number;
    };
    md?: true | 'auto' | number | {
        span?: true | 'auto' | number;
        offset?: number;
        order?: number;
    };
    sm?: true | 'auto' | number | {
        span?: true | 'auto' | number;
        offset?: number;
        order?: number;
    };
    xs?: true | 'auto' | number | {
        span?: true | 'auto' | number;
        offset?: number;
        order?: number;
    };
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const Column: (props: Props) => JSX.Element;
export { Column };
