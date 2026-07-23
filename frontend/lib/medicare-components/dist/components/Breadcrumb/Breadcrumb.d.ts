import React, { CSSProperties } from 'react';
export interface BreadcrumbProps {
    children?: React.ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare const Breadcrumb: (props: BreadcrumbProps) => JSX.Element;
export { Breadcrumb };
