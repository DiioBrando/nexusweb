export const LogoIcon = () => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="w-[100px] h-[100px] text-white"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                id="circle"
                d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                className="fill-none"
            />
            <circle
                cx="50"
                cy="50"
                r="20"
                className="fill-white stroke-white stroke-1"
            />
            <text className="fill-current text-[12px] tracking-widest">
                <textPath xlinkHref="#circle" startOffset="40">
                    NEXUS
                </textPath>
                <textPath xlinkHref="#circle" startOffset="105">
                    -
                </textPath>
                <textPath xlinkHref="#circle" startOffset="140">
                    WEB
                </textPath>
            </text>
            <text
                x="50"
                y="50"
                textAnchor="middle"
                dy=".3em"
                className="text-black text-[24px]"
                transform="rotate(45 50 50)"
            >
                N
            </text>
        </svg>
    );
};