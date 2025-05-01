'use client';
import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";
import {useLanguage} from "@/shared/hooks/useLanguage";
import {useEffect, useState} from "react";

export const ServicePage = () => {
    const {t} = useLanguage();
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            {/*<BrandingLabel t={t}/>*/}
            <div className={'w-full h-full z-40 lg:mx-10 md:mt-20 flex px-4'}>
                <div className={'flex-col items-center translate-y-[-40px] hidden xl:flex'}>
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
                <div className={'md:translate-y-[70px] uppercase w-full max-w-3/2 xl:max-w-2/3 flex flex-col xl:flex-row gap-5 px-5'}>
                    <div className={'text-[25px] uppercase block xl:hidden'}>
                        {t('ServicePage.service')}
                        <hr className={'w-[38px]'}/>
                    </div>
                    <div className={'flex flex-col md:flex-row gap-5 overflow-y-scroll scrollbar-transparent py-5'}>
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
            </div>
            <div className={'-z-10'}>
                <div className={'absolute md:translate-x-[-40px] bottom-0 w-full hidden xl:block'}>
                    <TransparentLetter
                        text={'THE CRE8TIVE'}
                        width={'100%'}
                        height={'100%'}
                        fontSize={160}
                        strokeWidth={1}
                        strokeColor={'gray'}
                    />
                </div>
            </div>
        </div>
    );
}