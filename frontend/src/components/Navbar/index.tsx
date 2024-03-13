import Logo from '@/assets/Logo.svg';
import {Bars3Icon} from "@heroicons/react/24/outline";
import ElementNavBar from '@/assets/ElementNavBar.svg';
import {HomeIcon, InformationCircleIcon, MapPinIcon, UserIcon, XMarkIcon} from "@heroicons/react/16/solid";
import ActionLink from "@/components/Navbar/ActionLink.tsx";
import {useState} from "react";

type Props = {
    isTopOfPage: boolean;
}
function Navbar({ isTopOfPage }: Props) {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between';
    const navbarWithScroll = !isTopOfPage ? 'shadow-xl' : '';

    const handleClick = () => {
        setIsMenuToggled(!isMenuToggled);
        const root = document.getElementById('root') as HTMLElement;
        if (root.classList) {
            root.classList.toggle('overflow-hidden', isMenuToggled);
        }
    };

    return (
        <nav>
            <div className={`${flexBetween} ${navbarWithScroll} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`lg:flex lg:justify-between w-full gap-32 hidden`}>
                            {/* LEFT SIDE */}
                            <img src={Logo} alt="logo" className='size-28'/>

                            {/* RIGHT SIDE */}
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <ActionLink page='Home'/>
                                    <ActionLink page='Infos'/>
                                    <ActionLink page='Map'/>
                                </div>

                                <div className={`${flexBetween} gap-2`}>
                                    <UserIcon className='size-6'></UserIcon>
                                    <ActionLink page='Sign In'/>
                                </div>
                            </div>
                        </div>
                        {!isMenuToggled && (
                            <button
                                className='rounded-full p-2 lg:hidden absolute top-4 right-5'
                                onClick={handleClick}
                            >
                                <Bars3Icon className='size-6 text-primary-3'/>
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {isMenuToggled && (
                <div className={`flex flex-col w-full h-screen lg:hidden z-1000`}>
                    <div className={`${flexBetween} fixed top-0 z-30 py-6 w-full`}>
                        <div className={`${flexBetween} w-5/6 mx-auto gap-32`}>
                            {/* CLOSE ICON */}
                            <div className={`flex justify-end w-full`}>
                                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                    <XMarkIcon className='size-6 text-primary-3'/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* MENU ITEMS */}
                    <div className='flex flex-col w-5/6 h-5/6 m-auto'>
                        <div className='flex pt-48'>
                            <div className='flex content-center'>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex flex-row gap-2'>
                                        <HomeIcon className='size-5'></HomeIcon>
                                        <ActionLink page='Home'/>
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <InformationCircleIcon className='size-6'></InformationCircleIcon>
                                        <ActionLink page='Infos'/>
                                    </div>
                                    <div className='flex flex-row gap-2'>
                                        <MapPinIcon className='size-6'></MapPinIcon>
                                        <ActionLink page='Map'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row gap-2 pt-64 text-primary-4 absolute bottom-16'>
                            <UserIcon className='size-6'></UserIcon>
                            <ActionLink page='Sign In'/>
                        </div>
                    </div>
                    <img src={ElementNavBar} alt='bottom navbar' className='w-full h-auto'/>
                </div>
            )}
        </nav>
    );
}

export default Navbar;