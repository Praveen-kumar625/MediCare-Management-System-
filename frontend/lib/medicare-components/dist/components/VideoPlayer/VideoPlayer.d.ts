import React from 'react';
import 'video-react/dist/video-react.css';
interface Props {
    src?: string;
    poster?: string;
    preload?: 'auto' | '' | 'none' | 'metadata';
    fluid?: boolean;
    width?: number;
    height?: number;
    muted?: boolean;
    playsInline?: boolean;
    aspectRatio?: string;
    autoPlay?: boolean;
    startTime?: number;
    children?: React.ReactNode;
}
declare const VideoPlayer: (props: Props) => JSX.Element;
export { VideoPlayer };
