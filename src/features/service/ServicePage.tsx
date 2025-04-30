'use client';
import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";
import {useLanguage} from "@/shared/hooks/useLanguage";

export const ServicePage = () => {
    const {t} = useLanguage();
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            <BrandingLabel t={t}/>
            <div className={'w-full h-full z-40 mx-10 mt-20 flex'}>
                <div className={'flex flex-col items-center translate-y-[-40px]'}>
                    <div className={'text-[25px] uppercase'}>
                        {t('ServicePage.service')}
                        <hr className={'w-[38px]'}/>
                    </div>
                    <TransparentLetter
                        text={'S'}
                        width={400}
                        height={400}
                        fontSize={300}
                        strokeWidth={1}
                        strokeColor={'gray'}
                    />
                </div>
                <div className={'translate-y-[70px] uppercase max-w-2/3 flex gap-5'}>
                    <div>
                        <h1 className={'text-[30px]'}>{t('ServicePage.identity.h1')}</h1>
                        <p className={'text-[16px] my-2'}>
                            {t('ServicePage.identity.title')}
                        </p>
                        <p className={'my-2 cursor-pointer hover:underline'}>{t('ServicePage.identity.more')}</p>
                    </div>
                    <div>
                    <h2 className={'text-[30px]'}>{t('ServicePage.technology.h1')}</h2>
                        <p className={'text-[16px] my-2'}>
                            {t('ServicePage.technology.title')}
                        </p>
                        <p className={'my-2 cursor-pointer hover:underline'}>{t('ServicePage.technology.more')}</p>
                    </div>
                    <div>
                    <h3 className={'text-[30px]'}>{t('ServicePage.design.h1')}</h3>
                        <p className={'text-[16px] my-2'}>
                            {t('ServicePage.design.title')}
                        </p>
                        <p className={'my-2 cursor-pointer hover:underline'}>{t('ServicePage.design.more')}</p>
                    </div>
                </div>
            </div>
            <div className={'-z-10'}>
                <div className={'absolute translate-x-[-40px] bottom-0 w-full'}>
                    <TransparentLetter
                        text={'THE CRE8TIVE'}
                        width={'100%'}
                        height={170}
                        fontSize={180}
                        strokeWidth={1}
                        strokeColor={'gray'}
                    />
                </div>
            </div>
        </div>
    );
}