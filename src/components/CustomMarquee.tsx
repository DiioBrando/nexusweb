import Marquee from "react-fast-marquee";
import {ComponentPropsWithoutRef} from "react";
import {CircleIcon} from "./ui/CircleIcon";

type ICustomMarquee = ComponentPropsWithoutRef<typeof Marquee>;

export const CustomMarquee = ({ children, classNameTXT, t,...rest }: ICustomMarquee) => {
    return (
        <Marquee {...rest}>
            {children}
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