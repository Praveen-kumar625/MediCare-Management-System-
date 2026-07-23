import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import React, { CSSProperties } from 'react';
import { IconType } from './interfaces';
interface Props {
    icon: IconType;
    size?: SizeProp;
    outline?: boolean;
    className?: string;
    style?: CSSProperties;
    onClick?: (event: React.MouseEvent<any>) => void;
}
declare const Icon: {
    (props: Props): JSX.Element;
    defaultProps: {
        outline: boolean;
        size: string;
    };
};
export { Icon };
