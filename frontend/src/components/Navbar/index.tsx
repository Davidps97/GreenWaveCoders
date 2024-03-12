import Logo from '@/assets/Logo.png';
import { UserIcon } from '@heroicons/react/24/outline';
import Link from "@/components/Navbar/Link.tsx";
import {SelectedPage} from "@/shared/SelectedPage.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import {Bars3Icon, XMarkIcon, HomeIcon, InformationCircleIcon, MapPinIcon} from "@heroicons/react/24/outline";
import {useState} from "react";

type Props = {
    selectedPage: SelectedPage;
    isTopOfPage: boolean;
    setSelectedPage: (value: SelectedPage) => void;
}

function Navbar({ selectedPage, setSelectedPage, isTopOfPage}: Props) {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const flexBetween = 'flex items-center justify-between';
    const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");

    const navbarWithScroll = isTopOfPage ? '' : 'shadow-xl';

    return (
      <nav>
          {
              !isMenuToggled && (
                  <div className={`${flexBetween} ${navbarWithScroll} fixed top-0 z-30 w-full py-6`}>
                      <div className={`${flexBetween} mx-auto w-5/6`}>
                          <div className={`${flexBetween} w-full gap-32`}>
                              {/* LEFT SIDE */}
                              <img src={Logo} alt="logo"/>

                              {/* RIGHT SIDE */}
                              {
                                  isAboveMediumScreens ? (
                                      <div className={`${flexBetween} w-full`}>
                                          <div className={`${flexBetween} gap-8 text-sm`}>
                                              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                              <Link page='Info' selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                              <Link page='Map' selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                          </div>

                                          <div className={`${flexBetween} gap-2`}>
                                              <UserIcon className='size-6'></UserIcon>
                                              <Link page='Sign In' selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                          </div>
                                      </div>
                                  ) : (
                                      <button
                                          className='rounded-full p-2'
                                          onClick={() => setIsMenuToggled(!isMenuToggled)}
                                      >
                                          <Bars3Icon className='size-6 text-primary-3'/>
                                      </button>
                                  )
                              }
                          </div>
                      </div>
                  </div>
              )
          }

          {/* MOBILE MENU MODAL */}
          {
              !isAboveMediumScreens && isMenuToggled && (
                  <div className='flex flex-col w-full h-screen'>
                      <div className={`${flexBetween} top-0 z-30 py-6 w-full`}>
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
                          <div className='flex pt-24'>
                              <div className='flex content-center'>
                                  <div className='flex flex-col gap-10'>
                                      <div className='flex flex-row gap-2'>
                                          <HomeIcon className='size-5'></HomeIcon>
                                          <Link page='Home' selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                      </div>
                                      <div className='flex flex-row gap-2'>
                                          <InformationCircleIcon className='size-6'></InformationCircleIcon>
                                          <Link page='Info' selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                      </div>
                                      <div className='flex flex-row gap-2'>
                                          <MapPinIcon className='size-6'></MapPinIcon>
                                          <Link page='Map' selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className='flex flex-row gap-2 pt-64 text-primary-4'>
                              <UserIcon className='size-6'></UserIcon>
                              <Link page='Sign In' selectedPage={selectedPage} setSelectedPage={setSelectedPage} isAboveMediumScreen={isAboveMediumScreens}/>
                          </div>
                      </div>
                  </div>
              )
          }
      </nav>
    );
}

export default Navbar;