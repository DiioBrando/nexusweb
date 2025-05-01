'use client';
import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";
import {useLanguage} from "@/shared/hooks/useLanguage";

export const AboutPage = () => {
    const {t} = useLanguage();
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            {/*<BrandingLabel t={t}/>*/}
            <div className={'w-full h-full z-40 mx-5 sm:mx-10 lg:mx-20 lg:mt-20 flex justify-center'}>
                <div className={'flex-col items-center translate-y-[-40px] hidden xl:flex'}>
                    <div className={'text-[25px] uppercase'}>
                        {t('AboutPage.about')}
                        <hr className={'w-[38px]'}/>
                    </div>
                    <TransparentLetter
                        text={'A'}
                        width={400}
                        height={400}
                        fontSize={300}
                        strokeWidth={1}
                        strokeColor={'gray'}
                    />
                </div>
                <div className={'translate-y-[70px] uppercase max-w-2/3 flex flex-col gap-5'}>
                    <div className={'text-[15px] md:text-[25px] uppercase block lg:hidden'}>
                        {t('AboutPage.about')}
                        <hr className={'w-[38px]'}/>
                    </div>
                    <h1 className={'text-[20px] md:text-[40px]'}>{t('AboutPage.h1')}</h1>
                    <p className={'text-[15px] md:text-[30px]'}>
                        {t('AboutPage.p')}
                    </p>
                    <div>
                        <h2>{t('AboutPage.contact')}:</h2>
                        <p>Telegram -</p>
                        <p>Email -</p>
                        <p>Phone -</p>
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
    )
}