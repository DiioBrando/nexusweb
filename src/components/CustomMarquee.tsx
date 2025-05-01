import Marquee from "react-fast-marquee";
import {ComponentPropsWithoutRef, ReactNode} from "react";
import {CircleIcon} from "./ui/CircleIcon";

type ICustomMarquee = ComponentPropsWithoutRef<typeof Marquee>;

interface ICustomMarqueeProps extends ICustomMarquee {
    classNameTXT: string;
    t: (s: string) => string;
}

export const CustomMarquee = ({ classNameTXT, t,...rest }: ICustomMarqueeProps) => {
    return (
        <Marquee {...rest}>
            <div className={'flex gap-5 items-center'}>
                <div className={'text-3xl ' + classNameTXT}>{t('Marquee.creative')}</div>
                <CircleIcon fill={'blue'}/>
                <div className={'text-3xl ' + classNameTXT}>{t('Marquee.ui/ux')}</div>
                <CircleIcon fill={'white'}/>
                <div className={'text-3xl ' + classNameTXT}>{t('Marquee.marketing')}</div>
                <CircleIcon fill={'green'}/>
                <div className={'text-3xl ' + classNameTXT}>{t('Marquee.motion')}</div>
                <CircleIcon fill={'purple'}/>
                <div className={'text-3xl ' + classNameTXT}>{t('Marquee.animation')}</div>
                <CircleIcon fill={'orange'}/>
                <div className={'text-3xl ' + classNameTXT}>{t('Marquee.branding')}</div>
            </div>
        </Marquee>
    );
};