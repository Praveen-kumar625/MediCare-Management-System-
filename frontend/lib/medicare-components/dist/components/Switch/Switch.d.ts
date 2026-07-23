import React, { CSSProperties } from 'react';
interface Props {
    id: string;
    label: string;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: CSSProperties;
}
declare const Switch: (props: Props) => JSX.Element;
export { Switch };
