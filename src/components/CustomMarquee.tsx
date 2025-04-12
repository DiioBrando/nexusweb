import Marquee from "react-fast-marquee";
import {ComponentPropsWithoutRef} from "react";
import {CircleIcon} from "../../public/svg/CircleIcon";

type ICustomMarquee = ComponentPropsWithoutRef<typeof Marquee>;

export const CustomMarquee = ({ children, ...rest }: ICustomMarquee) => {
    return (
        <Marquee {...rest}>
            {children}
            <div className={'flex gap-5 items-center'}>
                <div className={'text-3xl'}>CREATIVE DESIGN</div>
                <CircleIcon fill={'blue'}/>
                <div className={'text-3xl'}>UI/UX</div>
                <CircleIcon fill={'white'}/>
                <div className={'text-3xl'}>MARKETING</div>
                <CircleIcon fill={'green'}/>
                <div className={'text-3xl'}>MOTION</div>
                <CircleIcon fill={'purple'}/>
                <div className={'text-3xl'}>ANIMATION</div>
                <CircleIcon fill={'orange'}/>
                <div className={'text-3xl'}>BRNDING</div>
            </div>
        </Marquee>
    );
};