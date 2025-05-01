'use client';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/menubar"
import {CircleIcon} from "@/components/ui/CircleIcon";
import {MenuIcon} from "lucide-react";
import Link from "next/link";
import {useLanguage} from "@/shared/hooks/useLanguage";

export const Header = () => {
    const {t, setLanguage} = useLanguage();
    return (
        <header className={'flex justify-between items-center md:py-4 md:px-9 px-4'}>
            <div className={'flex items-center gap-2 text-[12px] md:text-[15px]'}>
                <button onClick={() => setLanguage('en')}>EN</button>
                <CircleIcon fill={'blue'}/>
                <button onClick={() => setLanguage('ru')}>RU</button>
            </div>
            <div className={'text-[15px] md:text-3xl'}>
                NEXUS WEB
            </div>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className={'flex gap-2 uppercase text-[12px] md:text-[15px]'}>
                        {t('Menu.menu')}
                        <MenuIcon/>
                    </MenubarTrigger>
                    <MenubarContent className={'z-50'}>
                        <MenubarItem>
                            <Link className={'w-full hover:text-gray-500 hover:animate-pulse first-letter:uppercase'} href={'/'}>{t('Menu.home')}</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link className={'w-full hover:text-gray-500 hover:animate-pulse first-letter:uppercase'} href={'/about'}>{t('Menu.about')}</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link className={'w-full hover:text-gray-500 hover:animate-pulse first-letter:uppercase'} href={'/service'}>{t('Menu.service')}</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link className={'w-full hover:text-gray-500 hover:animate-pulse first-letter:uppercase'} href={'/portfolio'}>{t('Menu.portfolio')}</Link>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </header>
    )
}