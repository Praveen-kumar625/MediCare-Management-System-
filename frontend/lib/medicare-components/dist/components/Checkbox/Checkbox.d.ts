import React, { CSSProperties } from 'react';
interface Props {
    id?: string;
    label: string;
    labelSide?: 'right' | 'left';
    name?: string;
    disabled?: boolean;
    inline?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
    labelClassName?: string;
    labelStyle?: CSSProperties;
    checked?: boolean;
}
declare const Checkbox: {
    (props: Props): JSX.Element;
    defaultProps: {
        labelSide: string;
    };
};
export { Checkbox };
