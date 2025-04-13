type TransparentLetterProps = {
    text: string;
    width?: number;
    height?: number;
    fontSize?: number;
    strokeColor?: string;
    strokeWidth?: number;
};

export const TransparentLetter = ({
                                      text,
                                      width,
                                      height,
                                      fontSize,
                                      strokeColor,
                                      strokeWidth,
                                  }: TransparentLetterProps) => {
    return (
        <svg width={width ?? 100} height={height ?? 100} xmlns="http://www.w3.org/2000/svg">
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                fontSize={fontSize ?? 40}
                fontFamily="Arial"
                fill="none"
                stroke={strokeColor ?? 'white'}
                strokeWidth={strokeWidth ?? 2}
                dominantBaseline="middle"
            >
                {text}
            </text>
        </svg>
    );
};