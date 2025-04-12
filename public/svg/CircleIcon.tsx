import { FC, SVGProps } from "react";

export const CircleIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            className="w-[10px] h-[10px] mx-1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="12" cy="12" r="10"/>
        </svg>
    );
};