import {LogoIcon} from "../../public/svg/LogoIcon";

export const BrandingLabel = () => {
    return (
        <div className={'absolute left-12'}>
            <LogoIcon/>
            <div className={'flex gap-10 text-white origin-top-left -rotate-90 translate-y-[450px] flex-row-reverse'}>
                <p>DIGITAL MARKETING</p>
                <p>DESIGN</p>
                <p>DEVELOPMENT</p>
            </div>
        </div>
    )
}