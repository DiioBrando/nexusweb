import { LogoIcon } from "../../public/svg/LogoIcon";

export const BrandingLabel = ({ t }: {t: (s: string) => string}) => {
    return (
        <div className={'relative max-w-max'}>
            <div className={'relative'}>
                <LogoIcon />
                <div className={'-rotate-90 absolute flex flex-row-reverse'}>
                    <p className={'px-0.5'}>{t('Branding.digital')}</p>
                    <p className={'px-0.5'}>{t('Branding.designing')}</p>
                    <p className={'px-0.5'}>{t('Branding.development')}</p>
                </div>
            </div>
        </div>
    );
};