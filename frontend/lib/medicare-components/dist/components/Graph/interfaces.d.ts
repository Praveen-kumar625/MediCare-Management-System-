export interface Data {
    x: any;
    y: any;
    backgroundColor?: string;
    borderColor?: string;
}
export interface Dataset {
    label: string;
    backgroundColor?: string;
    borderColor?: string;
    data: Data[];
}
export interface HasAxes {
    xAxes: Axis[];
    yAxes: Axis[];
}
export interface Graph {
    title?: string;
    titleFontSize?: number;
    titleFontColor?: string;
    datasets: Dataset[];
    width?: string;
    height?: string;
}
export interface Axis {
    type: 'category' | 'linear' | 'time';
    label: string;
    timeFormat?: 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
    timeStepSize?: number;
}
