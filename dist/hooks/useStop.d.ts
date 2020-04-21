declare type useStop = (config: {
    showControls(): void;
    seekTo(time: number): void;
}) => () => void;
export declare const useStop: useStop;
export {};
