// import {useNavigate} from "react-router-dom";
import Navbar from "@/components/Navbar";
//import {supabase} from "@/config/db.config.ts";
import {useEffect, useState, useRef} from "react";
import {SelectedPage} from "@/shared/SelectedPage.ts";
import './Home.css';
import 'swiper/swiper-bundle.css';
import News from "@/pages/Home/News.tsx";
import Infos from "@/components/Infos";
import Button from "@/components/Button";
//import {useNavigate} from "react-router-dom";
import TopPage from "./TopPage.tsx";
import OceanWaves from '@/assets/OceanWaves.mp4';

function Home() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    //const navigate = useNavigate();
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);


    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            }

            if (window.scrollY !== 0) {
                setIsTopOfPage(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // useEffect(() => {
    //     console.log(window.scrollY);
    //     console.log(window.innerHeight);
    //     console.log(window.innerWidth);
    //
    //     const handleScroll = () => {
    //         const isScrolled = window.scrollY > window.innerHeight;
    //         setIsTopOfPage(!isScrolled);
    //         console.log(!isScrolled);
    //     };
    //
    //     window.addEventListener('scroll', handleScroll);
    //
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [setIsTopOfPage]); // Include setIsTopOfPage as a dependency

// Log the updated value of isTopOfPage here if needed
    //console.log(isTopOfPage);

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
                <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage}/>
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
