import React, { CSSProperties } from 'react';
interface Props {
    id?: string;
    disabled?: boolean;
    isInvalid?: boolean;
    isValid?: boolean;
    name?: string;
    rows?: number;
    size?: 'small' | 'large';
    value?: string;
    defaultValue?: string | Array<string>;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    style?: CSSProperties;
    feedback?: string;
}
declare const TextField: (props: Props) => JSX.Element;
export { TextField };
