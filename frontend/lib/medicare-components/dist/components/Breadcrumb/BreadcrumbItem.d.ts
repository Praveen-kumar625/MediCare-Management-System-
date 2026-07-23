import React, { CSSProperties } from 'react';
interface Props {
    children?: React.ReactNode;
    active?: boolean;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
    style?: CSSProperties;
}
declare const BreadcrumbItem: ({ children, active, onClick, className, style }: Props) => JSX.Element;
export { BreadcrumbItem };
