import React, { CSSProperties } from 'react';
interface Props {
    type?: 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url';
    size?: 'sm' | 'lg';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    id?: string;
    placeholder?: string;
    disabled?: boolean;
    feedback?: string;
    isInvalid?: boolean;
    isValid?: boolean;
    className?: string;
    style?: CSSProperties;
    inputDefaultStyle?: Record<string, any>;
}
declare const TextInput: {
    (props: Props): JSX.Element;
    defaultProps: {
        type: string;
    };
};
export { TextInput };
