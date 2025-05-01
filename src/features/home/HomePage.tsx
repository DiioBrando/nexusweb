'use client';
import {CustomMarquee} from "@/components/CustomMarquee";
import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";
import {useLanguage} from "@/shared/hooks/useLanguage";

export const HomePage = () => {
    const {t} = useLanguage();
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            {/*<BrandingLabel t={t}/>*/}
            <div className={'w-full h-full z-40 mx-5 lg:mx-20 mt-40 sm:mt-20 relative flex'}>
                <div className={'absolute -left-20 sm:-left-10 -top-[11px] sm:top-auto lg:-left-0 hidden lg:block'}>
                    <TransparentLetter text={'M'} width={400} height={400} fontSize={300} strokeWidth={1}
                                       strokeColor={'gray'}/>
                </div>
                <div
                    className={'absolute top-12 left-6 sm:left-20 lg:left-40 text-[40px] sm:text-[60px] md:text-[70px] flex flex-wrap'}>
                    <div className={'flex'}>
                        <span className={'text-gray-500 break-words break-all sm:break-normal pr-5'}>
                            <span className={'text-white'}>{t('HomePage.brand')}</span>
                            {t('HomePage.design')}
                            <span className={'text-white'}>.</span>
                            <br className={'block lg:hidden'}/>
                            {t('HomePage.product')}
                            <span className={'text-white'}>.</span>
                            <br className={'hidden lg:block'}/>
                            <span className={'text-gray-300'}>{t('HomePage.development')}</span>
                            <br className={'hidden lg:block'}/>
                            <span className={'text-white'}>{t('HomePage.more')}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className={'-z-10'}>
                <div className={'absolute top-0 lg:bottom-0 lg:top-auto lg:-rotate-[12.95deg] origin-bottom-left z-20'}>
                    <CustomMarquee t={t} classNameTXT={'uppercase'} className={'bg-neutral-900 h-[90px] sm:h-[60px]'}/>
                </div>
                <div className={'absolute bottom-0 right-0 lg:rotate-[56deg] origin-bottom-right z-10'}>
                    <CustomMarquee t={t} classNameTXT={'text-black uppercase'}
                                   className={'bg-white h-[90px] sm:h-[60px]'}/>
                </div>
            </div>
        </div>
    );
};