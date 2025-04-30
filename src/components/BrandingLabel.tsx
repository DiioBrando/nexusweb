import {LogoIcon} from "../../public/svg/LogoIcon";

export const BrandingLabel = ({t}) => {
    return (
        <div className={'absolute left-12'}>
            <LogoIcon/>
            <div className={'flex gap-5 text-white origin-top-left -rotate-90 translate-y-[450px] flex-row-reverse uppercase text-[14px]'}>
                <p>{t('Branding.digital')}</p>
                <p>{t('Branding.designing')}</p>
                <p>{t('Branding.development')}</p>
            </div>
        </div>
    )
}