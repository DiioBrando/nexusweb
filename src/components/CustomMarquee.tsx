import Marquee from "react-fast-marquee";
import {ComponentPropsWithoutRef} from "react";
import {CircleIcon} from "../../public/svg/CircleIcon";

type ICustomMarquee = ComponentPropsWithoutRef<typeof Marquee>;

export const CustomMarquee = ({ children, classNameTXT, ...rest }: ICustomMarquee) => {
    return (
        <Marquee {...rest}>
            {children}
            <div className={'flex gap-5 items-center'}>
                <div className={'text-3xl ' + classNameTXT}>CREATIVE DESIGN</div>
                <CircleIcon fill={'blue'}/>
                <div className={'text-3xl ' + classNameTXT}>UI/UX</div>
                <CircleIcon fill={'white'}/>
                <div className={'text-3xl ' + classNameTXT}>MARKETING</div>
                <CircleIcon fill={'green'}/>
                <div className={'text-3xl ' + classNameTXT}>MOTION</div>
                <CircleIcon fill={'purple'}/>
                <div className={'text-3xl ' + classNameTXT}>ANIMATION</div>
                <CircleIcon fill={'orange'}/>
                <div className={'text-3xl ' + classNameTXT}>BRNDING</div>
            </div>
        </Marquee>
    );
};