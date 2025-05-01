'use client';
import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";
import Image from 'next/image'
import Link from "next/link";
import {usePortfolio} from "@/features/portfolio/api/usePortfolio";
import {Loader} from "../../../../public/svg/Loader";
import {useLanguage} from "@/shared/hooks/useLanguage";

export const PortfolioPage = () => {
    const { isFetching, data, isError} = usePortfolio();
    const {t} = useLanguage();
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            {/*<BrandingLabel t={t}/>*/}
            <div className={'w-full h-full z-40 md:mx-20 mt-10 md:mt-20 flex justify-center md:justify-start'}>
                <div className={'hidden xl:flex flex-col items-center translate-y-[50px] h-fit'}>
                    <div className={'text-[25px] uppercase'}>
                        {t('PortfolioPage.portfolio')}
                        <hr className={'w-[38px]'}/>
                    </div>
                    <TransparentLetter
                        text={'P'}
                        width={400}
                        height={400}
                        fontSize={300}
                        strokeWidth={1}
                        strokeColor={'gray'}
                    />
                </div>
                <div
                    className={'md:translate-y-[50px] uppercase max-w-2/3 flex gap-1.5 h-fit overflow-x-auto scrollbar-transparent flex-col'}>
                    <div className={'text-[25px] uppercase xl:hidden'}>
                        {t('PortfolioPage.portfolio')}
                        <hr className={'w-[38px]'}/>
                    </div>
                    <div className={'flex flex-col md:flex-row'}>
                    {isFetching ? <Loader/> :
                        data?.data && data?.data.map((project, index) => <div key={index}
                                                                              className={'h-full w-full md:w-[400px] md:h-[400px] flex flex-col items-center text-center'}>
                            <Image src={process.env.NEXT_PUBLIC_API_DATABASE_URL + project.pic} height={300} width={300}
                                   alt={'image ui/ux'}/>
                            <h1 className={'hover:underline hover:text-gray-500 cursor-pointer normal-case text-lg'}>
                                <Link href={project.href}>
                                    {project.name}
                                </Link>
                            </h1>
                            <p className={'text-xs'}>{project.title}</p>
                        </div>)
                    }
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