import React from 'react';
interface Props {
    id: string;
    searchAccessor: string;
    renderMenuItemChildren: (option: any) => React.ReactNode;
    onChange: (selected: any) => void;
    onSearch: (query: string) => Promise<any[]>;
    minLength?: number;
    placeholder?: string;
    value?: any;
    disabled?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    feedback?: string;
}
declare const Typeahead: {
    (props: Props): JSX.Element;
    defaultProps: {
        minLength: number;
    };
};
export { Typeahead };
