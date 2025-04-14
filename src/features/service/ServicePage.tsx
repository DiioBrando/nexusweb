import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";

export const ServicePage = () => {
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            <BrandingLabel/>
            <div className={'w-full h-full z-40 mx-10 mt-20 flex'}>
                <div className={'flex flex-col items-center translate-y-[-40px]'}>
                    <div className={'text-[25px] uppercase'}>
                        Service
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
                        <h1 className={'text-[32px]'}>Brand Identity.</h1>
                        <p className={'text-[16px] my-2'}>
                            Bringing the history of your brand to the
                            forefront gives an emotional dimension to your
                            visual identity, which is essential today more
                            than ever in today's digital landscape.
                        </p>
                        <p className={'my-2 cursor-pointer hover:underline'}>Know More</p>
                    </div>
                    <div>
                    <h2 className={'text-[32px]'}>Technology.</h2>
                        <p className={'text-[16px] my-2'}>
                            Bringing the history of your brand to the
                            forefront gives an emotional dimension to your
                            visual identity, which is essential today more
                            than ever in today's digital landscape.
                        </p>
                        <p className={'my-2 cursor-pointer hover:underline'}>Know More</p>
                    </div>
                    <div>
                    <h3 className={'text-[32px]'}>UX/UI Design.</h3>
                        <p className={'text-[16px] my-2'}>
                            Bringing the history of your brand to the
                            forefront gives an emotional dimension to your
                            visual identity, which is essential today more
                            than ever in today's digital landscape.
                        </p>
                        <p className={'my-2 cursor-pointer hover:underline'}>Know More</p>
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