import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/menubar"
import {CircleIcon} from "../../public/svg/CircleIcon";
import {MenuIcon} from "lucide-react";
import Link from "next/link";

export const Header = () => {
    return (
        <header className={'flex justify-between items-center py-4 px-12'}>
            <div className={'flex items-center gap-2'}>
                EN
                <CircleIcon fill={'blue'}/>
                RU
            </div>
            <div className={'text-3xl'}>
                NEXUSWEB
            </div>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className={'flex gap-2'}>
                        MENU
                        <MenuIcon/>
                    </MenubarTrigger>
                    <MenubarContent className={'z-50'}>
                        <MenubarItem>
                            <Link href={'/'}>Home</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href={'/about'}>About Us</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href={'/service'}>Service</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link href={'/portfolio'}>Portfolio</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </header>
    )
}