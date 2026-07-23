import React from 'react';
import { ButtonVariant } from 'src/interfaces';
interface Props<T> {
    tableClassName: string;
    headerClassName: string;
    columns: {
        key: string;
        label: string;
        formatter?: (row: T) => React.ReactNode;
    }[];
    data: T[];
    actionsHeaderText: string;
    actions?: {
        label: string;
        action: (row: T) => void;
        buttonColor?: ButtonVariant;
    }[];
    getID: (row: T) => string;
    onRowClick?: (row: T) => void;
}
declare function Table<T>(props: Props<T>): JSX.Element;
declare namespace Table {
    var defaultProps: {
        tableClassName: string;
        headerClassName: string;
        actionsHeaderText: string;
    };
}
export { Table };
