import { CustomMarquee } from "@/components/CustomMarquee";

export const HomePage = () => {
    return (
        <div className={'h-full w-full relative overflow-hidden'}>
            <div className={'absolute bottom-0 -rotate-[12.95deg] origin-bottom-left z-20'}>
                <CustomMarquee className={'bg-neutral-900 h-[60px]'}/>
            </div>
            <div className={'absolute bottom-0 right-0 rotate-[50.71deg] origin-bottom-right z-10'}>
                <CustomMarquee classNameTXT={'text-black'} className={'bg-white h-[60px]'}/>
            </div>
        </div>
    );
};