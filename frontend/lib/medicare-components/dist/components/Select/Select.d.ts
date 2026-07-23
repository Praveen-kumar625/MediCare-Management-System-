import 'react-bootstrap-typeahead/css/Typeahead.css';
interface SelectOption<T> {
    label: string;
    value: T;
}
interface Props<T> {
    id: string;
    options: SelectOption<T>[];
    defaultSelected?: SelectOption<T>[];
    onChange?: (values: T[]) => void;
    placeholder?: string;
    multiple?: boolean;
    disabled?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    feedback?: string;
}
declare function Select<T>(props: Props<T>): JSX.Element;
declare namespace Select {
    var defaultProps: {
        defaultSelected: never[];
        onChange: undefined;
        placeholder: string;
        multiple: boolean;
        disabled: boolean;
        isInvalid: boolean;
    };
}
export { Select };
