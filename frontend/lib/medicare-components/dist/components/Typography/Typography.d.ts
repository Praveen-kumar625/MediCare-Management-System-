import React from 'react';
interface Props {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
    styleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'display-1' | 'display-2' | 'display-3' | 'display-4';
    children?: React.ReactNode;
}
declare const Typography: (props: Props) => JSX.Element;
export { Typography };
