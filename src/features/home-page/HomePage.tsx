import {CustomMarquee} from "@/components/CustomMarquee";
import {BrandingLabel} from "@/components/BrandingLabel";
import {TransparentLetter} from "@/components/ui/TransparentLetter";

export const HomePage = () => {
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            <BrandingLabel/>
            <div className={'w-full h-full z-40 mx-20 mt-20 relative flex'}>
                    <TransparentLetter text={'M'} width={400} height={400} fontSize={300} strokeWidth={1} strokeColor={'gray'}/>
                <div className={'absolute top-12 left-40 text-[70px] flex flex-wrap'}>
                    Brand.<span className={'text-gray-500'}>Design<span className={'text-white'}>.</span></span><span
                    className={'text-gray-500'}>Product<span className={'text-white'}>.</span></span> In-Hous Development.<br/> &More
                </div>
            </div>
            <div className={'-z-10'}>
                <div className={'absolute bottom-0 -rotate-[12.95deg] origin-bottom-left z-20'}>
                    <CustomMarquee className={'bg-neutral-900 h-[60px]'}/>
                </div>
                <div className={'absolute bottom-0 right-0 rotate-[56deg] origin-bottom-right z-10'}>
                    <CustomMarquee classNameTXT={'text-black'} className={'bg-white h-[60px]'}/>
                </div>
            </div>
        </div>
    );
};