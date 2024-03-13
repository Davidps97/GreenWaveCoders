import Navbar from "@/components/Navbar";
import {supabase} from "@/config/db.config.ts";
import {useEffect, useState} from "react";
import './Home.css';
import 'swiper/swiper-bundle.css';
import News from "@/pages/Home/News.tsx";
import Infos from "@/components/Infos";
import {useNavigate} from "react-router-dom";
import TopPage from "./TopPage.tsx";
import OceanWaves from '@/assets/OceanWaves.mp4';

type Props = {
    isTopOfPage: boolean;
}

function Home({isTopOfPage}: Props) {
    //const navigate = useNavigate();

    // const signOutUser = () => {
    // supabase.auth.signOut().then(({ error }) => {
    //   if (error) {
    //     console.log(error);
    //   }
    //   navigate("/login");
    // });
    // };

    // <>
    //     <h1>Index</h1>
    //     <button onClick={() => signOutUser()}>LogOut</button>
    //     <div className="Home-body">
    //
    //     </div>
    // </>

    return (
        <div className='h-auto w-[100vw] flex flex-col pb-10 lg:relative'>
            <video autoPlay muted loop className='right-0 left-0 hidden lg:block'>
                <source src={OceanWaves} type="video/mp4"/>
            </video>
            <header>
                <Navbar isTopOfPage={isTopOfPage}/>
            </header>
            <main className={`mt-44 h-full w-full gap-y-16`}>
                <TopPage />
                <Infos/>
                <News/>
            </main>
        </div>
    );
}

export default Home;
