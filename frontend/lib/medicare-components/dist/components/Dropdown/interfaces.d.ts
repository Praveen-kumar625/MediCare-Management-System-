/// <reference types="react" />
import { ButtonVariant } from '../../interfaces';
export interface Item {
    text: string;
    onClick: (event: React.MouseEvent<any>) => void;
    eventKey?: string;
    variant?: ButtonVariant;
    id?: string;
    key?: string;
    style?: Record<string, any>;
}
