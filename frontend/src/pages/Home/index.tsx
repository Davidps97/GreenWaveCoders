import Navbar from "@/components/Navbar";
import {supabase} from "@/config/db.config.ts";
import React, {Suspense, useEffect, useState} from "react";
import 'swiper/swiper-bundle.css';
import News from "@/pages/Home/News.tsx";
import Infos from "@/components/Infos";
import {useNavigate} from "react-router-dom";
import TopPage from "./TopPage.tsx";
import OceanWaves from '@/assets/OceanWaves.mp4';
import MapComponent from "@/pages/Map/MapComponent.tsx";

type Props = {
    isTopOfPage: boolean;
}

function Home({isTopOfPage}: Props) {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const navigate = useNavigate();

    const signOutUser = () => {
        supabase.auth.signOut().then(({ error }) => {
          if (error) {
            console.log(error);
          }
          navigate("/login");
        });
    };

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div className='h-auto w-[100vw] flex flex-col pb-10 lg:relative'>
            <video autoPlay muted loop className='right-0 left-0 hidden lg:block lg:absolute z-10 w-full object-cover inset-0' onLoadedData={handleVideoLoaded}>
                <source src={OceanWaves} type="video/mp4"/>
            </video>
            {isVideoLoaded && (
                <>
                    <header>
                        <Navbar isTopOfPage={isTopOfPage}/>
                    </header>
                    <main className={`mt-28 lg:mt-44 h-full w-full gap-y-16`}>
                        <TopPage/>
                        <Infos/>
                        <News/>
                        <h2 className='font-montserrat text-m-30 font-medium text-primary-4 w-5/6 mx-auto justify-start mb-4 mt-16'>Events</h2>
                        <MapComponent/>
                    </main>
                </>
            )}
        </div>
    );
}

export default Home;
