import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";

export const AboutPage = () => {
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            <BrandingLabel/>
            <div className={'w-full h-full z-40 mx-20 mt-20 flex'}>
                    <TransparentLetter
                        text={'A'}
                        width={400}
                        height={400}
                        fontSize={300}
                        strokeWidth={1}
                        strokeColor={'gray'}
                    />

                <div className={'translate-y-[70px] uppercase max-w-2/3 flex flex-col gap-5'}>
                    <h1 className={'text-[40px]'}>we are a digital production team.</h1>
                    <p className={'text-[30px]'}>
                        Gleamy is a leading design & software development agency based in berlin.
                        We help startups & Fortune 500 companies delight humans on the other side of the screen.
                    </p>
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
    )
}